using System.ComponentModel.DataAnnotations;
using FateConnect.Api.Modules.Shared.Constants;

namespace FateConnect.Api.Modules.Usuarios.DTOs;

public class LoginDto
{
    [Required(ErrorMessage = "O email é obrigatório")]
    [EmailAddress(ErrorMessage = "Formato de email inválido")]
    [RegularExpression(RegexConstants.EmailInstitucionalFatec, ErrorMessage = RegexConstants.MensagemErroEmailFatec)]
    public string EmailFatec { get; set; } = string.Empty;

    [Required(ErrorMessage = "A senha é obrigatória")]
    public string Senha { get; set; } = string.Empty;
}
