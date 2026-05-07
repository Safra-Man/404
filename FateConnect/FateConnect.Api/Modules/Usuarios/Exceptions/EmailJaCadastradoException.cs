namespace FateConnect.Api.Modules.Usuarios.Exceptions
{
    public class EmailJaCadastradoException : InvalidOperationException
    {
        public EmailJaCadastradoException(string email)
            : base($"O e-mail '{email}' já está em uso no sistema.")
        {
        }
    }
}