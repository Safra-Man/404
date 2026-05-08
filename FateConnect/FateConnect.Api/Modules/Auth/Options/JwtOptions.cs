namespace FateConnect.Api.Modules.Auth.Entities
{
    public class JwtOptions
    {
        public string Secret { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        public string Audience { get; set; } = string.Empty;
        public double ExpiracaoHoras { get; set; } = 8;
    }
}
