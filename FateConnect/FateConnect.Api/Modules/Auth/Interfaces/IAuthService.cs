using FateConnect.Api.Modules.Usuarios.DTOs;

namespace FateConnect.Api.Modules.Auth.Interfaces
{
    public interface IAuthService
    {
        Task<TokenResponseDto> LoginAsync(LoginDto dto);
    }
}
