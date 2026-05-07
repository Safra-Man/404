using FateConnect.Api.Modules.Auth.Interfaces;
using FateConnect.Api.Modules.Shared.DTOs;
using FateConnect.Api.Modules.Shared.Entities;
using FateConnect.Api.Modules.Usuarios.DTOs;
using FateConnect.Api.Modules.Usuarios.Enums;
using FateConnect.Api.Modules.Usuarios.Exceptions;
using FateConnect.Api.Modules.Usuarios.Interfaces;
using static BCrypt.Net.BCrypt;

namespace FateConnect.Api.Modules.Usuarios.Services;

public class UsuarioService : IUsuarioService
{
    private readonly IUsuarioRepository _usuarioRepository;

    public UsuarioService(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    public async Task<UsuarioResponseDto> CadastrarAsync(CreateUsuarioDto dto)
    {
        await GarantirEmailUnicoAsync(dto.EmailFatec);

        Usuario novoUsuario = MontarEntidadeUsuario(dto);

        await _usuarioRepository.AdicionarAsync(novoUsuario);

        UsuarioResponseDto resposta = new UsuarioResponseDto
        {
            Id = novoUsuario.Id,
            EmailFatec = novoUsuario.EmailFatec,
            NomeCompleto = novoUsuario.NomeCompleto
        };

        return resposta;
    }

    private async Task GarantirEmailUnicoAsync(string email)
    {
        bool emailEmUso = await _usuarioRepository.ExisteEmailAsync(email);

        if (emailEmUso)
            throw new EmailJaCadastradoException(email);
    }

    private Usuario MontarEntidadeUsuario(CreateUsuarioDto dto)
    {
        string senhaComHash = GerarHashDaSenha(dto.Senha);

        List<Endereco> enderecosMapeados = MontarListaDeEnderecos(dto.Enderecos);
        List<Contato> contatosMapeados = MontarListaDeContatos(dto.Contatos);

        Usuario usuario = new Usuario
        {
            EmailFatec = dto.EmailFatec,
            NomeCompleto = dto.NomeCompleto,
            Apelido = dto.Apelido,
            DataNascimento = dto.DataNascimento,
            Genero = dto.Genero,
            Senha = senhaComHash,
            Perfil = TipoPerfilEnum.Operador,
            DataCadastro = DateTime.UtcNow,
            DataAtualizacao = DateTime.UtcNow,
            Enderecos = enderecosMapeados,
            Contatos = contatosMapeados
        };

        return usuario;
    }

    private List<Endereco> MontarListaDeEnderecos(List<CreateEnderecoDto>? dtos)
    {
        if (dtos == null || !dtos.Any())
            return new List<Endereco>();

        List<Endereco> enderecos = dtos.Select(dto => new Endereco
        {
            Cep = dto.Cep,
            Logradouro = dto.Logradouro,
            Numero = dto.Numero,
            Complemento = dto.Complemento,
            Cidade = dto.Cidade,
            Estado = dto.Estado
        }).ToList();

        return enderecos;
    }

    private List<Contato> MontarListaDeContatos(List<CreateContatoDto>? dtos)
    {
        if (dtos == null || !dtos.Any())
            return new List<Contato>();

        List<Contato> contatos = dtos.Select(dto => new Contato
        {
            Telefone = dto.Telefone,
            EmailContato = dto.EmailContato
        }).ToList();

        return contatos;
    }

    private string GerarHashDaSenha(string senhaPadrao)
    {
        return HashPassword(senhaPadrao);
    }
}
