using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace FateConnect.Api.Modules.Shared.DTOs;

public class CreateContatoDto
{
    [Required(ErrorMessage = "O telefone e obrigatório")]
    [MaxLength(11)]
    [DefaultValue("11999999999")]
    public string Telefone { get; set; } = string.Empty;

    [Required(ErrorMessage = "O email de contato e obrigatório")]
    [EmailAddress(ErrorMessage = "Formato de email inválido")]
    [MaxLength(150)]
    [DefaultValue("pedro.augusto@gmail.com")]
    public string EmailContato { get; set; } = string.Empty;
}