using System.ComponentModel.DataAnnotations;

namespace FateConnect.Api.Modules.Usuarios.DTOs
{
    public class LoginDto
    {
        [Required(ErrorMessage = "O email e obrigatório")]
        public string EmailFatec { get; set; } = string.Empty;
        [Required(ErrorMessage = "A senha e obrigatória")]
        public string Senha { get; set; } = string.Empty;
    }
}