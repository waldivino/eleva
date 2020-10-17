using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public class Escola
    {
        public decimal id { get; set; }
        public String cnpj { get; set; }
        public String nome { get; set; }
        public String endereco { get; set; }
        public List<Turma> turmas { get; set; }
    }
}
