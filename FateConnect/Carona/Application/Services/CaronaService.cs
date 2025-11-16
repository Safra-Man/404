using Application.DTOs;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.Extensions.Logging;

namespace Application.Services
{
    public class CaronaService : ICaronaService
    {
        private readonly ICaronaRepository _repository;
        private readonly ILogger<CaronaService> _logger;

        public CaronaService(ICaronaRepository repository, ILogger<CaronaService> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        public async Task<ReadCaronaDto> CreateAsync(CreateCaronaDto dtoCarona)
        {
            Carona carona = new Carona(
                dtoCarona.QtdVagas,
                dtoCarona.Destino,
                dtoCarona.DataPartida,
                dtoCarona.HoraPartida,
                dtoCarona.TipoCarona,
                dtoCarona.Descricao
            );

            await _repository.AddAsync(carona);

            _logger.LogInformation("Carona {CaronaId} criada com sucesso.", carona.Id);
            return mapeador(carona);
        }

        public async Task<IEnumerable<ReadCaronaDto>> GetAllAsync(FilterCaronaDto filtro)
        {
            IEnumerable<Carona> caronas = await _repository.GetAllAsync(
                filtro.DataPartida,
                filtro.HoraPartida,
                filtro.Destino,
                filtro.TipoCarona
            );

            _logger.LogInformation("Caronas {CaronasCount} recuperadas com sucesso.", caronas.Count());
            return caronas.Select(mapeador);
        }

        public async Task<ReadCaronaDto?> GetByIdAsync(Guid id)
        {
            Carona? carona = await _repository.GetByIdAsync(id);

            if (carona == null)
            {
                _logger.LogInformation("Carona {CaronaId} não encontrada.", id);
                return null;
            }

            _logger.LogInformation("Carona {CaronaId} encontrada.", id);
            return mapeador(carona);
        }

        public async Task<ReadCaronaDto?> UpdateAsync(Guid id, UpdateCaronaDto dto)
        {
            Carona? carona = await _repository.GetByIdAsync(id);

            if (carona == null)
            {
                _logger.LogInformation("Carona {CaronaId} não encontrada.", id);
                return null;
            }

            carona.AtualizarAtributosBasicos(
                dto.QtdVagas,
                dto.Destino,
                dto.TipoCarona,
                dto.Descricao
            );

            if (dto.DataPartida.HasValue || dto.HoraPartida.HasValue)
                carona.AlterarDataPartida(dto.DataPartida, dto.HoraPartida);

            await _repository.UpdateAsync(carona);

            _logger.LogInformation("Carona {CaronaId} atualizada com sucesso.", id);
            return mapeador(carona);
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            Carona? carona = await _repository.GetByIdAsync(id);

            if (carona == null)
            {
                _logger.LogInformation("Carona {CaronaId} já estava desativada ou não foi encontrada.", id);
                return false;
            }

            carona.Desativar();

            await _repository.UpdateAsync(carona);

            _logger.LogInformation("Carona {CaronaId} desativada com sucesso.", id);
            return true;
        }

        private ReadCaronaDto mapeador(Carona carona)
        {
            return new ReadCaronaDto(
                carona.Id,
                carona.QtdVagas,
                carona.Destino,
                carona.DataPartida,
                carona.HoraPartida,
                carona.DataCadastro,
                carona.TipoCarona,
                carona.Descricao,
                carona.Ativo
            );
        }
    }
}
