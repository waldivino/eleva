using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.models;

namespace api.Data
{
    public class TurmaContext : DbContext
    {
        public TurmaContext (DbContextOptions<TurmaContext> options)
            : base(options)
        {
        }

        public DbSet<api.models.Turma> Turma { get; set; }
    }
}
