using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class api : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Escolas",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cnpj = table.Column<string>(nullable: true),
                    nome = table.Column<string>(nullable: true),
                    endereco = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escolas", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Turmas",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    turma = table.Column<string>(nullable: true),
                    periodo = table.Column<string>(nullable: true),
                    escolaid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turmas", x => x.id);
                    table.ForeignKey(
                        name: "FK_Turmas_Escolas_escolaid",
                        column: x => x.escolaid,
                        principalTable: "Escolas",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Turmas_escolaid",
                table: "Turmas",
                column: "escolaid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Turmas");

            migrationBuilder.DropTable(
                name: "Escolas");
        }
    }
}
