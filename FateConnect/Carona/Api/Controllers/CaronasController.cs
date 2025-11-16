using Application.DTOs;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [SwaggerTag("Gerenciamento de Caronas")]
    public class CaronasController : ControllerBase
    {
        private readonly ICaronaService _caronaService;

        public CaronasController(ICaronaService caronaService)
        {
            _caronaService = caronaService;
        }

        [HttpGet]
        [SwaggerOperation(
            Summary = "Busca caronas ativas",
            Description = "Este endpoint retorna uma lista de todas as caronas que estão com Ativas"
        )]
        [ProducesResponseType(typeof(IEnumerable<ReadCaronaDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync(
            [FromQuery] FilterCaronaDto filtros
        )
        {
            IEnumerable<ReadCaronaDto> caronas = await _caronaService.GetAllAsync(filtros);

            return Ok(caronas);
        }

        [HttpGet("{id}", Name = "BuscarPorId")]
        [SwaggerOperation(
            Summary = "Busca uma carona pelo Id",
            Description = "Retorna uma carona específica pelo id, desde que ela esteja ativa"
        )]
        [SwaggerResponse(StatusCodes.Status200OK, "Carona encontrada", typeof(ReadCaronaDto))]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Carona não encontrada")]
        public async Task<IActionResult> GetByIdAsync(
            [SwaggerParameter("Id da carona.")] Guid id)
        {
            ReadCaronaDto? carona = await _caronaService.GetByIdAsync(id);

            if (carona == null)
                return NotFound();

            return Ok(carona);
        }

        [HttpPost]
        [SwaggerOperation(
            Summary = "Cria uma nova carona",
            Description = "Registra uma nova carona no sistema"
        )]
        [SwaggerResponse(StatusCodes.Status201Created, "Carona criada com sucesso", typeof(ReadCaronaDto))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Dados inválidos ou violação de regra de negócio", typeof(ProblemDetails))]
        public async Task<IActionResult> CreateAsync(
            [SwaggerRequestBody("Dados da nova carona")] CreateCaronaDto dto)
        {
            ReadCaronaDto novaCarona = await _caronaService.CreateAsync(dto);

            return CreatedAtRoute(
                routeName: "BuscarPorId",
                routeValues: new { id = novaCarona.Id },
                value: novaCarona
            );
        }

        [HttpPut("{id}")]
        [SwaggerOperation(
            Summary = "Atualiza uma carona existente",
            Description = "Permite alterar dados de uma carona, como vagas, destino ou data"
        )]
        [SwaggerResponse(StatusCodes.Status200OK, "Carona atualizada com sucesso", typeof(ReadCaronaDto))]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Carona não encontrada")]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Dados inválidos ou violação de regra de negócio", typeof(ProblemDetails))]
        public async Task<IActionResult> UpdateAsync(
            [SwaggerParameter("Id da carona a ser atualizada")] Guid id,
            [SwaggerRequestBody("Dados para atualização")] UpdateCaronaDto dto)
        {
            ReadCaronaDto? caronaAtualizada = await _caronaService.UpdateAsync(id, dto);

            if (caronaAtualizada == null)
                return NotFound();

            return Ok(caronaAtualizada);
        }

        [HttpDelete("{id}")]
        [SwaggerOperation(
            Summary = "Desativa uma carona",
            Description = "Altera o status de Ativo da carona para false"
        )]
        [SwaggerResponse(StatusCodes.Status204NoContent, "Carona desativada com sucesso")]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Carona não encontrada")]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Violação de regra de negócio", typeof(ProblemDetails))]
        public async Task<IActionResult> DeleteAsync(
            [SwaggerParameter("Id da carona a ser desativada")] Guid id)
        {
            bool foiDesativada = await _caronaService.DeleteAsync(id);

            if (!foiDesativada)
                return NotFound();

            return NoContent();
        }
    }
}