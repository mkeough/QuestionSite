using Microsoft.EntityFrameworkCore.Migrations;

namespace QuestionSite.Migrations
{
    public partial class AddedScoringToAnswersTable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Answers");

            migrationBuilder.AddColumn<int>(
                name: "DownVote",
                table: "Answers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UpVote",
                table: "Answers",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DownVote",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "UpVote",
                table: "Answers");

            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "Answers",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
