using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.models;
using api.models.dto;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurmaController : ControllerBase
    {
        private readonly ElevaContext _context;

        public TurmaController(ElevaContext context)
        {
            _context = context;
        }

        // GET: api/Turma
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Turma>>> GetTurmas()
        {
            return await _context.Turmas.ToListAsync();
        }

        // GET: api/Turma/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Turma>> GetTurma(int id)
        {
            var turma = await _context.Turmas.FindAsync(id);

            if (turma == null)
            {
                return NotFound();
            }

            return turma;
        }

        // PUT: api/Turma/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTurma(int id, TurmaDTO turmaDTO)
        {
            Turma turma = populaTurmaPut(turmaDTO);
            if (id != turma.id)
            {
                return BadRequest();
            }

            _context.Entry(turma).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TurmaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Turma
        [HttpPost]
        public async Task<ActionResult<TurmaDTO>> PostTurma(TurmaDTO turmaDTO)
        {
            Turma turma = populaTurmaPost(turmaDTO);

            _context.Turmas.Add(turma);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTurma", new { id = turma.id }, turma);
        }

        private static Turma populaTurmaPut(TurmaDTO turmaDTO)
        {
            Turma turma = new Turma();
            turma.id = turmaDTO.id;
            turma.escolaId = turmaDTO.escolaId;
            turma.turma = turmaDTO.turma;
            turma.periodo = turmaDTO.periodo;
            return turma;
        }

        private static Turma populaTurmaPost(TurmaDTO turmaDTO)
        {
            Turma turma = new Turma();
            turma.escolaId = turmaDTO.escolaId;
            turma.turma = turmaDTO.turma;
            turma.periodo = turmaDTO.periodo;
            return turma;
        }

        // DELETE: api/Turma/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Turma>> DeleteTurma(int id)
        {
            var turma = await _context.Turmas.FindAsync(id);
            if (turma == null)
            {
                return NotFound();
            }

            _context.Turmas.Remove(turma);
            await _context.SaveChangesAsync();

            return turma;
        }

        private bool TurmaExists(int id)
        {
            return _context.Turmas.Any(e => e.id == id);
        }
    }
}
