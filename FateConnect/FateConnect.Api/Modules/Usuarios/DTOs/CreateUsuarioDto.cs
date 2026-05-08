using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using FateConnect.Api.Modules.Shared.Constants;
using FateConnect.Api.Modules.Shared.DTOs;
using FateConnect.Api.Modules.Usuarios.Enums;

namespace FateConnect.Api.Modules.Usuarios.DTOs;

public class CreateUsuarioDto
{
    [Required(ErrorMessage = "O email é obrigatório")]
    [EmailAddress(ErrorMessage = "Formato de email inválido")]
    [RegularExpression(RegexConstants.EmailInstitucionalFatec, ErrorMessage = RegexConstants.MensagemErroEmailFatec)]
    [MaxLength(150)]
    [DefaultValue("joao.silva999@aluno.cps.sp.gov.br")]
    public string EmailFatec { get; set; } = string.Empty;

    [Required(ErrorMessage = "A senha é obrigatória")]
    [MinLength(8, ErrorMessage = "A senha deve ter no mínimo 8 caracteres")]
    [DefaultValue("SenhaForte123!")]
    public string Senha { get; set; } = string.Empty;

    [Required(ErrorMessage = "O nome completo é obrigatório")]
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

    [Required]
    required public List<CreateEnderecoDto> Enderecos { get; set; } =
    [];

    [Required]
    required public List<CreateContatoDto> Contatos { get; set; } =
    [];
}
