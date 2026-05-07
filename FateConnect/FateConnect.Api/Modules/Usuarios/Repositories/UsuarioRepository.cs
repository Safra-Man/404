using FateConnect.Api.Infrastructure.Database;
using FateConnect.Api.Modules.Usuarios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FateConnect.Api.Modules.Usuarios.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly FateConnectDbContext _context;

        public UsuarioRepository(FateConnectDbContext context)
        {
            _context = context;
        }

        public async Task<bool> ExisteEmailAsync(string email)
        {
            return await _context.Usuarios.AnyAsync(u => u.EmailFatec == email);
        }

        public async Task<Usuario?> ObterUsuarioPorEmailAsync(string email)
        {
            return await _context.Usuarios.FirstOrDefaultAsync(u => u.EmailFatec == email);
        }

        public async Task AdicionarAsync(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();
        }
    }
}
