using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public class Turma
    {
        public decimal id { get; set; }
        public Escola escola { get; set; }
        public String turma { get; set; }
        public String periodo { get; set; }

    }
}
