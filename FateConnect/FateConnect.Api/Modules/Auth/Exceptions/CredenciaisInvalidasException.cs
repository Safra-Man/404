namespace FateConnect.Api.Modules.Usuarios.Exceptions
{
    public class CredenciaisInvalidasException : UnauthorizedAccessException
    {
        public CredenciaisInvalidasException()
            : base("E-mail ou senha inválido.")
        {
        }
    }
}