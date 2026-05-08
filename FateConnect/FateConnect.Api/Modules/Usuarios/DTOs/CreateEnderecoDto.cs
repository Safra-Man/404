using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace FateConnect.Api.Modules.Shared.DTOs;

public class CreateEnderecoDto
{
    [Required(ErrorMessage = "O CEP e obrigatório")]
    [MaxLength(9)]
    [DefaultValue("18013-280")]
    public string Cep { get; set; } = string.Empty;

    [Required(ErrorMessage = "O logradouro e obrigatório")]
    [MaxLength(200)]
    [DefaultValue("Avenida Engenheiro Carlos Reinaldo Mendes")]
    public string Logradouro { get; set; } = string.Empty;

    [Required(ErrorMessage = "O número e obrigatório")]
    [MaxLength(20)]
    [DefaultValue("2015")]
    public string Numero { get; set; } = string.Empty;

    [MaxLength(100)]
    [DefaultValue("Predio Principal")]
    public string Complemento { get; set; } = string.Empty;

    [Required(ErrorMessage = "A cidade e obrigatória")]
    [MaxLength(100)]
    [DefaultValue("Sorocaba")]
    public string Cidade { get; set; } = string.Empty;

    [Required(ErrorMessage = "O estado e obrigatório")]
    [MaxLength(2)]
    [DefaultValue("SP")]
    public string Estado { get; set; } = string.Empty;
}
