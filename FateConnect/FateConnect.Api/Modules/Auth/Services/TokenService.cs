using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using FateConnect.Api.Modules.Auth.Entities;
using FateConnect.Api.Modules.Auth.Interfaces;
using FateConnect.Api.Modules.Usuarios;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace FateConnect.Api.Modules.Auth.Services;

public class TokenService : ITokenService
{
    private readonly JwtOptions _jwtOptions;

    public TokenService(IOptions<JwtOptions> jwtOptions)
    {
        _jwtOptions = jwtOptions.Value;
    }

    public string GerarJwtToken(Usuario usuario)
    {
        JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

        byte[] chaveSeguranca = Encoding.ASCII.GetBytes(_jwtOptions.Secret);
        ClaimsIdentity claimsDoUsuario = CriarClaimsDoUsuario(usuario);

        SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = claimsDoUsuario,
            Expires = DateTime.UtcNow.AddHours(_jwtOptions.ExpiracaoHoras),
            Issuer = _jwtOptions.Issuer,
            Audience = _jwtOptions.Audience,
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(chaveSeguranca),
                SecurityAlgorithms.HmacSha256Signature)
        };

        SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }

    private ClaimsIdentity CriarClaimsDoUsuario(Usuario usuario)
    {
        Claim[] claims =
        [
            new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
            new Claim(ClaimTypes.Email, usuario.EmailFatec),
            new Claim(ClaimTypes.Role, usuario.Perfil.ToString())
        ];

        return new ClaimsIdentity(claims);
    }
}
