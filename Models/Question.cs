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

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    // nav prop
    public List<Review> Reviews { get; set; } = new List<Review>();
  }
}