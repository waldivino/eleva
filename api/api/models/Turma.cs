using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public class Turma
    {
        [Key]
        public Int32 id { get; set; }
        public String turma { get; set; }
        public String periodo { get; set; }
        public Escola escola { get; set; }

        public Turma()
        {

        }

    }
}