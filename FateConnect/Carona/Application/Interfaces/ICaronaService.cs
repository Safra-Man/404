using Application.DTOs;

namespace Application.Interfaces
{
    public interface ICaronaService
    {
        Task<ReadCaronaDto> CreateAsync(CreateCaronaDto dto);
        Task<IEnumerable<ReadCaronaDto>> GetAllAsync(FilterCaronaDto filtro);
        Task<ReadCaronaDto?> GetByIdAsync(Guid id);
        Task<ReadCaronaDto?> UpdateAsync(Guid id, UpdateCaronaDto dto);
        Task<bool> DeleteAsync(Guid id);
    }
}