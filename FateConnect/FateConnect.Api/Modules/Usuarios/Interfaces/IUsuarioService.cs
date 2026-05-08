using FateConnect.Api.Modules.Usuarios.DTOs;

namespace FateConnect.Api.Modules.Usuarios.Services
{
    public interface IUsuarioService
    {
        Task<UsuarioResponseDto> CadastrarAsync(CreateUsuarioDto dto);
    }
}
