using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public class Escola
    {
        [Key]
        public Int32 id { get; set; }
        public String cnpj { get; set; }
        public String nome { get; set; }
        public String endereco { get; set; }
        public IList<Turma> Turmas { get; set; }

        public Escola()
        {

        }
    }
}
