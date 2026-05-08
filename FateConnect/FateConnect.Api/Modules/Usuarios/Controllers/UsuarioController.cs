using FateConnect.Api.Modules.Shared.DTOs;
using FateConnect.Api.Modules.Usuarios.DTOs;
using FateConnect.Api.Modules.Usuarios.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FateConnect.Api.Modules.Usuarios.Controllers;

[ApiController]
[Route("api/usuario")]
[Produces("application/json")]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioService _usuarioService;

    public UsuarioController(IUsuarioService usuarioService)
    {
        _usuarioService = usuarioService;
    }

    [HttpPost("cadastro")]
    [AllowAnonymous]
    [Consumes("application/json")]
    [ProducesResponseType(typeof(UsuarioResponseDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ErroResponseDto), StatusCodes.Status409Conflict)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CadastrarAsync([FromBody] CreateUsuarioDto dto)
    {
        UsuarioResponseDto resposta = await _usuarioService.CadastrarAsync(dto);

        return CreatedAtAction(nameof(CadastrarAsync), new { id = resposta.Id }, resposta);
    }
}
