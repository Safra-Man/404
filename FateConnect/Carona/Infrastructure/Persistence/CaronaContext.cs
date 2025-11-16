using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence
{
    public class CaronaContext : DbContext
    {
        public CaronaContext(DbContextOptions<CaronaContext> options)
            : base(options)
        { }

        public DbSet<Carona> Caronas { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Carona>(entity =>
            {
                entity.ToTable("caronas");

                entity.HasKey(c => c.Id);

                entity.Property(c => c.QtdVagas)
                      .IsRequired();

                entity.Property(c => c.Destino)
                      .HasMaxLength(100)
                      .IsRequired();

                entity.Property(c => c.DataPartida)
                      .IsRequired();

                entity.Property(c => c.HoraPartida)
                      .IsRequired();

                entity.Property(c => c.DataCadastro)
                      .IsRequired();

                entity.Property(c => c.TipoCarona)
                      .IsRequired();

                entity.Property(c => c.Descricao)
                      .HasMaxLength(300);

                entity.Property(c => c.Ativo)
                      .IsRequired();
            });
        }
    }
}
