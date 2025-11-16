using Domain.Enums;

namespace Application.DTOs
{
    public class UpdateCaronaDto
    {
        public int? QtdVagas { get; set; }
        public string? Destino { get; set; }
        public DateOnly? DataPartida { get; set; }
        public TimeOnly? HoraPartida { get; set; }
        public EnumTipoCarona? TipoCarona { get; set; }
        public string? Descricao { get; set; }
    }
}