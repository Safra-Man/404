using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FateConnect.Api.Modules.Shared.DTOs;

public class ErroResponseDto
{
    [Required]
    [DefaultValue("O e-mail informado já está em uso no sistema.")]
    public string Mensagem { get; set; } = string.Empty;
}
