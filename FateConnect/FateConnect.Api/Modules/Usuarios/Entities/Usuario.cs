using FateConnect.Api.Modules.Shared.Entities;
using FateConnect.Api.Modules.Usuarios.Enums;
namespace FateConnect.Api.Modules.Usuarios;

public class Usuario
{
    public int Id { get; set; }
    public string EmailFatec { get; set; } = string.Empty;
    public string Senha { get; set; } = string.Empty;
    public string NomeCompleto { get; set; } = string.Empty;
    public string? Apelido { get; set; }
    public DateTime DataNascimento { get; set; }
    public GeneroEnum Genero { get; set; }
    public DateTime DataCadastro { get; set; }
    public DateTime DataAtualizacao { get; set; }
    public TipoPerfilEnum Perfil { get; set; }
    public ICollection<Endereco> Enderecos { get; set; } = new List<Endereco>();
    public ICollection<Contato> Contatos { get; set; } = new List<Contato>();
}