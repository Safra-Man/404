using Domain.Entities;
using Domain.Enums;

namespace Application.Interfaces
{
    public interface ICaronaRepository
    {
        Task<IEnumerable<Carona>> GetAllAsync(
            DateOnly? dataPartida,
            TimeOnly? horaPartida,
            string? destino,
            EnumTipoCarona? tipoCarona
        );
        Task<Carona?> GetByIdAsync(Guid id);
        Task<Carona> AddAsync(Carona carona);
        Task UpdateAsync(Carona carona);
    }
}