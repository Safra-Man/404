using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FateConnect.Api.Modules.Usuarios.DTOs;

public class UsuarioResponseDto
{
    [Required]
    [DefaultValue(1)]
    public int Id { get; set; }

    [Required]
    [EmailAddress]
    [DefaultValue("joao.silva99@aluno.cps.sp.gov.br")]
    public string EmailFatec { get; set; } = string.Empty;

    [Required]
    [DefaultValue("João da Silva")]
    public string NomeCompleto { get; set; } = string.Empty;
}
