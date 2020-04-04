
using System;
using System.Text.Json.Serialization;


namespace QuestionSite.Models
{
  public class Answer
  {
    public int Id { get; set; }
    public string UserAnswer { get; set; }
    public int UpVote { get; set; } = 0;

    public int DownVote { get; set; } = 0;
    public DateTime SubmittedAt { get; set; } = DateTime.Now;

    // navigation properties
    public int QuestionId { get; set; }

    [JsonIgnore]
    public Question Question { get; set; }
  }
}