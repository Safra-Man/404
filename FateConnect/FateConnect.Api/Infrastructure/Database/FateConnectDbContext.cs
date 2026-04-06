using Microsoft.EntityFrameworkCore;
using FateConnect.Api.Modules.Usuarios;
using FateConnect.Api.Modules.Shared.Entities;
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
            entity.Property(e => e.DataCadastro).HasDefaultValueSql("CURRENT_TIMESTAMP");
            entity.Property(e => e.DataAtualizacao).HasDefaultValueSql("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");
        });

        modelBuilder.Entity<Endereco>()
            .HasOne(e => e.Usuario)
            .WithMany(u => u.Enderecos)
            .HasForeignKey(e => e.UsuarioId);

        modelBuilder.Entity<Contato>()
            .HasOne(c => c.Usuario)
            .WithMany(u => u.Contatos)
            .HasForeignKey(c => c.UsuarioId);
    }
}