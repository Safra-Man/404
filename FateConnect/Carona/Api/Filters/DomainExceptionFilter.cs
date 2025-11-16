using Domain.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Api.Filters
{
    public class DomainExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<DomainExceptionFilter> _logger;

        public DomainExceptionFilter(ILogger<DomainExceptionFilter> logger)
        {
            _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            if (context.Exception is DomainException)
            {
                _logger.LogWarning(
                    "Violação de Regra de Negócio: {Message}",
                    context.Exception.Message);

                var problemaDetalhado = new ProblemDetails
                {
                    Status = StatusCodes.Status400BadRequest,
                    Title = "Erro na Regra de Negócio",
                    Detail = context.Exception.Message
                };

                context.Result = new BadRequestObjectResult(problemaDetalhado);

                context.ExceptionHandled = true;
            }
        }
    }
}