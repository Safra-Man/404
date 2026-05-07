using FateConnect.Api.Modules.Usuarios;

namespace FateConnect.Api.Modules.Auth.Interfaces
{
    public interface ITokenService
    {
        string GerarJwtToken(Usuario usuario);
    }
}
