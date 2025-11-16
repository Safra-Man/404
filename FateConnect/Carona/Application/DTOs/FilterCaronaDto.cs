using Domain.Enums;

namespace Application.DTOs
{
    public class FilterCaronaDto
    {
        public DateOnly? DataPartida { get; set; }
        public TimeOnly? HoraPartida { get; set; }
        public string? Destino { get; set; }
        public EnumTipoCarona? TipoCarona { get; set; }
    }
}