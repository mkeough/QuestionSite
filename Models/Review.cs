
using System;


namespace QuestionSite.Models
{
  public class Review
  {
    public int Id { get; set; }
    public string Comment { get; set; }
    public int Rating { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    // navigation properties
    public int QuestionId { get; set; }

    // [JsonIgnore]
    public Question Question { get; set; }
  }
}