using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using FateConnect.Api.Modules.Shared.DTOs;
using FateConnect.Api.Modules.Usuarios.Enums;
namespace FateConnect.Api.Modules.Usuarios.DTOs;

public class CreateUsuarioDto
{
    [Required(ErrorMessage = "O email e obrigatório")]
    [EmailAddress(ErrorMessage = "Formato de email inválido")]
    [RegularExpression(@"^[a-zA-Z0-9._%+-]+@fatec\.sp\.gov\.br$", ErrorMessage = "O email deve ser do domínio @fatec.sp.gov.br")]
    [MaxLength(150)]
    [DefaultValue("joao.silva99@fatec.sp.gov.br")]
    public string EmailFatec { get; set; } = string.Empty;

    [Required(ErrorMessage = "A senha e obrigatória")]
    [MinLength(8, ErrorMessage = "A senha deve ter no mínimo 8 caracteres")]
    [DefaultValue("SenhaForte123!")]
    public string Senha { get; set; } = string.Empty;

    [Required(ErrorMessage = "O nome completo e obrigatório")]
    [MaxLength(200)]
    [DefaultValue("João da Silva")]
    public string NomeCompleto { get; set; } = string.Empty;

    [MaxLength(50)]
    [DefaultValue("Joãozinho")]
    public string? Apelido { get; set; }

    [Required]
    [DefaultValue("2000-01-01T00:00:00Z")]
    public DateTime DataNascimento { get; set; }

    [Required]
    [DefaultValue(0)]
    public GeneroEnum Genero { get; set; }

    public List<CreateEnderecoDto>? Enderecos { get; set; }

    public List<CreateContatoDto>? Contatos { get; set; }
}