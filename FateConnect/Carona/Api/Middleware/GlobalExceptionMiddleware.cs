using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace Api.Middleware
{
    public class GlobalExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<GlobalExceptionMiddleware> _logger;

        public GlobalExceptionMiddleware(RequestDelegate next, ILogger<GlobalExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocorreu uma exceção não tratada: {Message}", ex.Message);

                var problemaDetalhado = new ProblemDetails
                {
                    Status = StatusCodes.Status500InternalServerError,
                    Title = "Erro Interno do Servidor",
                    Detail = "Ocorreu um erro inesperado no processamento da sua solicitação. Tente novamente mais tarde."
                };

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;

                await context.Response.WriteAsync(JsonSerializer.Serialize(problemaDetalhado));
            }
        }
    }
}