namespace FateConnect.Api.Modules.Shared.Entities;

using FateConnect.Api.Modules.Usuarios;

public class Contato
{
    public int Id { get; set; }
    public string Telefone { get; set; } = string.Empty;
    public string EmailContato { get; set; } = string.Empty;
    public int UsuarioId { get; set; }
    public Usuario Usuario { get; set; } = null!;
}