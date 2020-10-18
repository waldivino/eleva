using api.models;
using Microsoft.EntityFrameworkCore;

namespace TrampouApi.Context
{
    public class PersisteContext : DbContext
    {

        public PersisteContext(DbContextOptions<PersisteContext> opcoes) : base(opcoes)
        {
        }

        public DbSet<Escola> Escolas { get; set; }
        public DbSet<Turma> Turmas { get; set; }

        private void ConfiguraEscola(ModelBuilder construtorDeModelos)
        {
            construtorDeModelos.Entity<Escola>(escola =>
            {
                escola.ToTable("Escolas");
                escola.HasKey(e => e.id).HasName("id_escola");
                escola.Property(e => e.id).HasColumnName("id_escola").ValueGeneratedOnAdd();
                escola.Property(e => e.cnpj).HasColumnName("cnpj").HasMaxLength(25);
                escola.Property(e => e.nome).HasColumnName("nome").HasMaxLength(255);
                escola.Property(e => e.endereco).HasColumnName("endereco").HasMaxLength(555);
                escola.HasMany(e => e.Turmas).WithOne(t => t.escola);

            });
        }
        private void ConfiguraTurma(ModelBuilder construtorDeModelos)
        {
            construtorDeModelos.Entity<Turma>(turma =>
            {
                turma.ToTable("Turmas");
                turma.HasKey(t => t.id).HasName("id_turma");
                turma.Property(t => t.turma).HasColumnName("nm_turma").ValueGeneratedOnAdd();
                turma.Property(t => t.periodo).HasColumnName("periodo").HasMaxLength(25);
                turma.Property(t => t.escolaId).HasColumnName("escolaid");
                turma.HasOne(e => e.escola).WithMany(t => t.Turmas);
            });
        }

        protected override void OnModelCreating(ModelBuilder construtorDeModelos)
        {
            construtorDeModelos.HasDefaultSchema("public");

            ConfiguraEscola(construtorDeModelos);
            ConfiguraTurma(construtorDeModelos);
        }

    }
}
