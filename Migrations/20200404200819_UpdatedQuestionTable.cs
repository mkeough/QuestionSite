using Microsoft.EntityFrameworkCore.Migrations;

namespace QuestionSite.Migrations
{
    public partial class UpdatedQuestionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DownVote",
                table: "Questions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UpVote",
                table: "Questions",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DownVote",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "UpVote",
                table: "Questions");
        }
    }
}
