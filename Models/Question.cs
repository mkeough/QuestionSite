using System;
using System.Collections.Generic;

namespace QuestionSite.Models
{
  public class Question
  {
    public int Id { get; set; }

    public string UserQuestion { get; set; }

    public string KeyWord { get; set; }

    public bool IsAnswered { get; set; }

    public int UpVote { get; set; } = 0;

    public int DownVote { get; set; } = 0;

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    // nav prop
    public List<Answer> Answers { get; set; } = new List<Answer>();
  }
}