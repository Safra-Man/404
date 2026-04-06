using System.Text;
using System.Text.Json.Serialization;
using DotNetEnv;
using FateConnect.Api.Infrastructure.Database;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
namespace FateConnect.Api;

public class Program
{
    public static void Main(string[] args)
    {
        Env.Load();
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

        string localUrl = "http://localhost:4200";
        string serverUrl = "http://191.252.210.114:8080";
        string corsLog = "CORS released for: " + localUrl + " e " + serverUrl;
        string corsPolicy = "AllowFrontendAngular";

        builder.Services.AddCors(options =>
        {
            options.AddPolicy(corsPolicy, policy =>
            {
                policy.WithOrigins(localUrl, serverUrl)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });

        builder.Services.AddControllers()
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });

        builder.Services.AddEndpointsApiExplorer();

        builder.Services.AddSwaggerGen(c =>
        {
            c.EnableAnnotations();
            c.MapType<TimeOnly>(() => new OpenApiSchema
            {
                Type = "string",
                Format = "time",
                Example = new OpenApiString("16:20:00"),
            });

            c.SwaggerDoc("v1", new OpenApiInfo { Title = "FateConnect API", Version = "v1" });

            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Description = "JWT Authorization header usando Bearer.",
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                Scheme = "Bearer",
                BearerFormat = "JWT",
                In = ParameterLocation.Header,
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" },
                    },
                    new string[] { }
                },
            });
        });

        string jwtKey = Environment.GetEnvironmentVariable("JWT_KEY") ?? string.Empty;
        string jwtIssuer = Environment.GetEnvironmentVariable("JWT_ISSUER") ?? string.Empty;
        string jwtAudience = Environment.GetEnvironmentVariable("JWT_AUDIENCE") ?? string.Empty;
        string environmentLog = "Variables loaded for issuer " + jwtIssuer + " and audience " + jwtAudience;
        byte[] key = Encoding.ASCII.GetBytes(jwtKey);

        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtIssuer,
                    ValidAudience = jwtAudience,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                };
            });

        string connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION") ?? string.Empty;

        builder.Services.AddDbContext<FateConnectDbContext>(options =>
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

        WebApplication app = builder.Build();
        app.Logger.LogInformation(corsLog);
        app.Logger.LogInformation(environmentLog);
        app.UseCors(corsPolicy);
        app.UseSwagger();
        app.UseSwaggerUI();
        app.UseAuthentication();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}