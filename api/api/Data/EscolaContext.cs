using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.models;

namespace api.Data
{
    public class EscolaContext : DbContext
    {
        public EscolaContext (DbContextOptions<EscolaContext> options)
            : base(options)
        {
        }

        public DbSet<api.models.Escola> Escola { get; set; }
    }
}
