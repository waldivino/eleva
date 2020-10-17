using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class api : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Escola",
                columns: table => new
                {
                    id = table.Column<decimal>(nullable: false),
                    cnpj = table.Column<string>(nullable: true),
                    nome = table.Column<string>(nullable: true),
                    endereco = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escola", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Turma",
                columns: table => new
                {
                    id = table.Column<decimal>(nullable: false),
                    escolaid = table.Column<decimal>(nullable: true),
                    turma = table.Column<string>(nullable: true),
                    periodo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turma", x => x.id);
                    table.ForeignKey(
                        name: "FK_Turma_Escola_escolaid",
                        column: x => x.escolaid,
                        principalTable: "Escola",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Turma_escolaid",
                table: "Turma",
                column: "escolaid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Turma");

            migrationBuilder.DropTable(
                name: "Escola");
        }
    }
}
