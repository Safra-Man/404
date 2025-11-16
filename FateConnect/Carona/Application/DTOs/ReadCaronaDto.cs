using Domain.Enums;

namespace Application.DTOs
{
    public record ReadCaronaDto(
        Guid Id,
        int QtdVagas,
        string Destino,
        DateOnly DataPartida,
        TimeOnly HoraPartida,
        DateTime DataCadastro,
        EnumTipoCarona TipoCarona,
        string? Descricao,
        bool Ativo
    );
}