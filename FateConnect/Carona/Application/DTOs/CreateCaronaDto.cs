using System.ComponentModel.DataAnnotations;
using Domain.Enums;

namespace Application.DTOs
{
    public class CreateCaronaDto
    {
        [Required(ErrorMessage = "A quantidade de vagas é obrigatória.")]
        [Range(1, 7, ErrorMessage = "A carona deve ter entre 1 e 7 vagas.")]
        public required int QtdVagas { get; set; }

        [Required(ErrorMessage = "O destino é obrigatório.")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "O destino deve ter entre 3 e 100 caracteres.")]
        public required string Destino { get; set; }

        [Required(ErrorMessage = "A data da partida é obrigatória.")]
        public required DateOnly DataPartida { get; set; }

        [Required(ErrorMessage = "A hora da partida é obrigatória.")]
        public required TimeOnly HoraPartida { get; set; }

        [Required(ErrorMessage = "O tipo de carona é obrigatório.")]
        public required EnumTipoCarona TipoCarona { get; set; }

        [StringLength(300, ErrorMessage = "A descrição pode ter no máximo 300 caracteres.")]
        public string? Descricao { get; set; }
    }
}