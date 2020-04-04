
using System;
using System.Text.Json.Serialization;


namespace QuestionSite.Models
{
  public class Answer
  {
    public int Id { get; set; }
    public string UserAnswer { get; set; }
    public int Rating { get; set; }
    public DateTime SubmittedAt { get; set; } = DateTime.Now;

    // navigation properties
    public int QuestionId { get; set; }

    [JsonIgnore]
    public Question Question { get; set; }
  }
}