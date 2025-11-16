using Application.Interfaces;
using Domain.Entities;
using Domain.Enums;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class CaronaRepository : ICaronaRepository
    {
        private readonly CaronaContext _context;

        public CaronaRepository(CaronaContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Carona>> GetAllAsync(
            DateOnly? dataPartida,
            TimeOnly? horaPartida,
            string? destino,
            EnumTipoCarona? tipoCarona
        )
        {
            IQueryable<Carona> query = _context.Caronas.Where(c => c.Ativo);

            if (dataPartida.HasValue)
                query = query.Where(c => c.DataPartida == dataPartida.Value);

            if (horaPartida.HasValue)
                query = query.Where(c => c.HoraPartida == horaPartida.Value);

            if (!string.IsNullOrWhiteSpace(destino))
            {
                query = query.Where(c =>
                    EF.Functions.ILike(
                        EF.Functions.Unaccent(c.Destino),
                        "%" + EF.Functions.Unaccent(destino) + "%"
                    )
                );
            }

            if (tipoCarona.HasValue)
                query = query.Where(c => c.TipoCarona == tipoCarona.Value);

            query = query.OrderBy(c => c.DataPartida);

            return await query.ToListAsync();
        }

        public async Task<Carona?> GetByIdAsync(Guid id)
        {
            return await _context.Caronas.FirstOrDefaultAsync(c => c.Id == id && c.Ativo);
        }

        public async Task<Carona> AddAsync(Carona carona)
        {
            _context.Caronas.Add(carona);
            await _context.SaveChangesAsync();
            return carona;
        }

        public async Task UpdateAsync(Carona carona)
        {
            _context.Caronas.Update(carona);
            await _context.SaveChangesAsync();
        }
    }
}
