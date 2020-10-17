using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.models;

namespace api.Data
{
    public class ElevaContext : DbContext
    {
        public ElevaContext (DbContextOptions<ElevaContext> options)
            : base(options)
        {
        }

        public DbSet<api.models.Escola> Escolas { get; set; }

        public DbSet<api.models.Turma> Turmas { get; set; }
    }
}
