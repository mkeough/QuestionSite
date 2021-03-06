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
  public class QuestionsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public QuestionsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Questions
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
    {
      return await _context.Questions.ToListAsync();
    }

    // GET: api/Questions/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetQuestion(int id)
    {
      var question = await _context.Questions.Include(qst => qst.Answers).FirstOrDefaultAsync(f => f.Id == id);

      if (question == null)
      {
        return NotFound();
      }

      return question;
    }

    // PUT: api/Questions/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutQuestion(int id, Question question)
    {
      if (id != question.Id)
      {
        return BadRequest();
      }

      _context.Entry(question).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!QuestionExists(id))
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

    // POST: api/Questions
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Question>> PostQuestion(Question question)
    {
      _context.Questions.Add(question);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetQuestion", new { id = question.Id }, question);
    }

    [HttpPost("{questionId}/answers")]
    public async Task<ActionResult> AddAnswerForQuestion(int questionId, Answer userAnswer)
    {
      //opt 1
      // adding review to the trial
      userAnswer.QuestionId = questionId;
      // add the review to the database
      _context.Answers.Add(userAnswer);
      await _context.SaveChangesAsync();
      // returning something
      return Ok(userAnswer);
    }
    [HttpPost("{questionId}/answers/{answerId}/upvote")]
    public async Task<ActionResult> AddUpVote(int questionId, int answerId)
    {
      var foundAnswer = await _context.Answers.FirstOrDefaultAsync(answer => answer.Id == answerId && answer.QuestionId == questionId);
      foundAnswer.UpVote += 1;
      await _context.SaveChangesAsync();
      return Ok(foundAnswer);


    }
    [HttpPost("{questionId}/answers/{answerId}/downvote")]
    public async Task<ActionResult> AddDownVote(int questionId, int answerId)
    {
      var foundAnswer = await _context.Answers.FirstOrDefaultAsync(answer => answer.Id == answerId && answer.QuestionId == questionId);
      foundAnswer.DownVote += 1;
      await _context.SaveChangesAsync();
      return Ok(foundAnswer);


    }
    [HttpPost("{questionId}/upvote")]
    public async Task<ActionResult> UpVoteQuestion(int questionId)
    {
      var foundQuestion = await _context.Questions.FirstOrDefaultAsync(question => question.Id == questionId);
      foundQuestion.UpVote += 1;
      await _context.SaveChangesAsync();
      return Ok(foundQuestion);
    }
    [HttpPost("{questionId}/downvote")]
    public async Task<ActionResult> DownVoteQuestion(int questionId)
    {
      var foundQuestion = await _context.Questions.FirstOrDefaultAsync(question => question.Id == questionId);
      foundQuestion.DownVote += 1;

      await _context.SaveChangesAsync();
      return Ok(foundQuestion);


    }





    // DELETE: api/Questions/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Question>> DeleteQuestion(int id)
    {
      var question = await _context.Questions.FindAsync(id);
      if (question == null)
      {
        return NotFound();
      }

      _context.Questions.Remove(question);
      await _context.SaveChangesAsync();

      return question;
    }

    private bool QuestionExists(int id)
    {
      return _context.Questions.Any(e => e.Id == id);
    }
  }
}
