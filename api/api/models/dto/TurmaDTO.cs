using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.models.dto
{
    public class TurmaDTO
    {
        public Int32 id { get; set; }
        public String turma { get; set; }
        public String periodo { get; set; }
        public Int32 escolaId { get; set; }

        public TurmaDTO()
        {

        }
    }
}
