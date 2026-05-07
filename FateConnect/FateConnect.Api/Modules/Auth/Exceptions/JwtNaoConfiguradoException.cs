namespace FateConnect.Api.Modules.Usuarios.Exceptions
{
    public class JwtNaoConfiguradoException : InvalidOperationException
    {
        public JwtNaoConfiguradoException()
                    : base("JWT_SECRET não configurado.")
        {
        }
    }
}
