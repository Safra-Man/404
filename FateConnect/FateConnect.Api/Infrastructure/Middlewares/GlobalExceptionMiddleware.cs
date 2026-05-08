using System.Net;
using System.Text.Json;
using FateConnect.Api.Modules.Usuarios.Exceptions;

namespace FateConnect.Api.Infrastructure.Middlewares
{
    public class GlobalExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public GlobalExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";

            var statusCode = (int)HttpStatusCode.InternalServerError;
            var mensagemErro = "Ocorreu um erro interno no servidor.";

            switch (exception)
            {
                case EmailJaCadastradoException e:
                    statusCode = (int)HttpStatusCode.Conflict;
                    mensagemErro = e.Message;
                    break;

                case CredenciaisInvalidasException e:
                    statusCode = (int)HttpStatusCode.Unauthorized;
                    mensagemErro = e.Message;
                    break;

                case JwtNaoConfiguradoException e:
                    statusCode = (int)HttpStatusCode.InternalServerError;
                    mensagemErro = e.Message;
                    break;
            }

            context.Response.StatusCode = statusCode;

            var resultado = JsonSerializer.Serialize(new { erro = mensagemErro });

            return context.Response.WriteAsync(resultado);
        }
    }
}
