namespace FateConnect.Api.Modules.Usuarios.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<bool> ExisteEmailAsync(string email);
        Task<Usuario?> ObterUsuarioPorEmailAsync(string email);
        Task AdicionarAsync(Usuario usuario);
    }
}
