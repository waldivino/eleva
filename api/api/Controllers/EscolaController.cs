using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscolaController : ControllerBase
    {
        private readonly ElevaContext _context;

        public EscolaController(ElevaContext context)
        {
            _context = context;
        }

        // GET: api/Escola
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Escola>>> GetEscolas()
        {
            var escolas = (from e in _context.Escolas
                        join t in _context.Turmas on e.id equals t.id select e).ToList();

            //return await _context.Escolas.ToListAsync();
            return await _context.Escolas.ToListAsync();
        }

        // GET: api/Escola/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Escola>> GetEscola(int id)
        {
            var escola = await _context.Escolas.FindAsync(id);

            if (escola == null)
            {
                return NotFound();
            }

            return escola;
        }

        // PUT: api/Escola/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEscola(int id, Escola escola)
        {
            if (id != escola.id)
            {
                return BadRequest();
            }

            _context.Entry(escola).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EscolaExists(id))
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

        // POST: api/Escola
        [HttpPost]
        public async Task<ActionResult<Escola>> PostEscola(Escola escola)
        {
            _context.Escolas.Add(escola);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEscola", new { id = escola.id }, escola);
        }

        // DELETE: api/Escola/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Escola>> DeleteEscola(int id)
        {
            var escola = await _context.Escolas.FindAsync(id);
            if (escola == null)
            {
                return NotFound();
            }

            _context.Escolas.Remove(escola);
            await _context.SaveChangesAsync();

            return escola;
        }

        private bool EscolaExists(int id)
        {
            return _context.Escolas.Any(e => e.id == id);
        }
    }
}
