using System.Text;
using System.Text.Json.Serialization;
using DotNetEnv;
using FateConnect.Api.Infrastructure.Database;
using FateConnect.Api.Infrastructure.Middlewares;
using FateConnect.Api.Modules.Auth.Entities;
using FateConnect.Api.Modules.Auth.Interfaces;
using FateConnect.Api.Modules.Auth.Services;
using FateConnect.Api.Modules.Usuarios.Interfaces;
using FateConnect.Api.Modules.Usuarios.Repositories;
using FateConnect.Api.Modules.Usuarios.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FateConnect.Api;

public class Program
{
    public static void Main(string[] args)
    {
        Env.Load();
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

        string localUrl = "http://localhost:4200";
        string serverUrl = "http://191.252.210.114:8080";
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

        var jwtOptions = new JwtOptions
        {
            Secret = Environment.GetEnvironmentVariable("JWT_SECRET") ?? string.Empty,
            Issuer = Environment.GetEnvironmentVariable("JWT_ISSUER") ?? string.Empty,
            Audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE") ?? string.Empty,
            ExpiracaoHoras = double.TryParse(Environment.GetEnvironmentVariable("JWT_EXPIRACAO_HORAS"), out double horas) ? horas : 8
        };

        builder.Services.AddSingleton(Microsoft.Extensions.Options.Options.Create(jwtOptions));

        builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
        builder.Services.AddScoped<IUsuarioService, UsuarioService>();
        builder.Services.AddScoped<ITokenService, TokenService>();
        builder.Services.AddScoped<IAuthService, AuthService>();

        builder.Services.AddControllers()
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
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
                Description = "JWT Authorization header usando Bearer. Ex: 'Bearer 12345abcdef'",
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
                    Array.Empty<string>()
                },
            });
        });

        byte[] key = Encoding.ASCII.GetBytes(jwtOptions.Secret);

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
                    ValidIssuer = jwtOptions.Issuer,
                    ValidAudience = jwtOptions.Audience,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ClockSkew = TimeSpan.Zero
                };
            });

        string connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION") ?? string.Empty;

        builder.Services.AddDbContext<FateConnectDbContext>(options =>
        options.UseNpgsql(connectionString));

        WebApplication app = builder.Build();

        app.Logger.LogInformation("CORS liberado para: {Local} e {Server}", localUrl, serverUrl);
        app.Logger.LogInformation("Variaveis carregadas para Issuer: {Issuer}", jwtOptions.Issuer);

        app.UseMiddleware<GlobalExceptionMiddleware>();

        app.UseCors(corsPolicy);
        app.UseSwagger();
        app.UseSwaggerUI();

        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();
        app.Run();
    }
}
