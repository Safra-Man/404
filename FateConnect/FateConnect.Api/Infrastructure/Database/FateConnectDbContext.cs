using FateConnect.Api.Modules.Shared.Entities;
using FateConnect.Api.Modules.Usuarios;
using Microsoft.EntityFrameworkCore;

namespace FateConnect.Api.Infrastructure.Database;

public class FateConnectDbContext : DbContext
{
    public FateConnectDbContext(DbContextOptions<FateConnectDbContext> options)
    : base(options)
    {
    }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Endereco> Enderecos { get; set; }
    public DbSet<Contato> Contatos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.EmailFatec).IsRequired().HasMaxLength(150);
            entity.Property(e => e.NomeCompleto).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Apelido).HasMaxLength(50);
            entity.Property(e => e.Senha).IsRequired().HasMaxLength(255);
            entity.Property(e => e.DataCadastro).HasDefaultValueSql("CURRENT_TIMESTAMP");
            entity.Property(e => e.DataAtualizacao).HasDefaultValueSql("CURRENT_TIMESTAMP");
        });

        modelBuilder.Entity<Endereco>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Cep).IsRequired().HasMaxLength(9);
            entity.Property(e => e.Logradouro).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Numero).IsRequired().HasMaxLength(20);
            entity.Property(e => e.Complemento).HasMaxLength(100);
            entity.Property(e => e.Cidade).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Estado).IsRequired().HasMaxLength(2);

            entity.HasOne(e => e.Usuario)
                  .WithMany(u => u.Enderecos)
                  .HasForeignKey(e => e.UsuarioId)
                  .OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<Contato>(entity =>
        {
            entity.HasKey(c => c.Id);
            entity.Property(c => c.Telefone).IsRequired().HasMaxLength(11);
            entity.Property(c => c.EmailContato).IsRequired().HasMaxLength(150);

            entity.HasOne(c => c.Usuario)
                  .WithMany(u => u.Contatos)
                  .HasForeignKey(c => c.UsuarioId)
                  .OnDelete(DeleteBehavior.Cascade);
        });
    }
}
