using FateConnect.Api.Modules.Auth.Interfaces;
using FateConnect.Api.Modules.Usuarios;
using FateConnect.Api.Modules.Usuarios.DTOs;
using FateConnect.Api.Modules.Usuarios.Exceptions;
using FateConnect.Api.Modules.Usuarios.Interfaces;
using static BCrypt.Net.BCrypt;

namespace FateConnect.Api.Modules.Auth.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly ITokenService _tokenService;

        public AuthService(IUsuarioRepository usuarioRepository, ITokenService tokenService)
        {
            _usuarioRepository = usuarioRepository;
            _tokenService = tokenService;
        }

        public async Task<TokenResponseDto> LoginAsync(LoginDto dto)
        {
            Usuario? usuario = await _usuarioRepository.ObterUsuarioPorEmailAsync(dto.EmailFatec);

            bool saoCredenciaisInvalidas = CredenciaisInvalidas(usuario, dto.Senha);

            if (saoCredenciaisInvalidas)
                throw new CredenciaisInvalidasException();

            string tokenGerado = _tokenService.GerarJwtToken(usuario!);

            return new TokenResponseDto
            {
                NomeCompleto = usuario!.NomeCompleto,
                Token = tokenGerado
            };
        }

        private bool CredenciaisInvalidas(Usuario? usuario, string senhaInserida)
        {
            if (usuario == null)
                return true;

            return !Verify(senhaInserida, usuario.Senha);
        }
    }
}
