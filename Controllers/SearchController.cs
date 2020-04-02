using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuestionSite.Models;



namespace QuestionSite.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {

    private readonly DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet("questions")]

    public async Task<ActionResult> SearchQuestions(string keyWord)
    {
      var results = _context.Questions.Where(w => w.KeyWord.ToLower().Contains(keyWord.ToLower()));
      return Ok(await results.ToListAsync());
    }
  }
}