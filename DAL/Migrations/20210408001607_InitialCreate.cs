using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(type: "varchar(10)", nullable: false),
                    Correo = table.Column<string>(type: "varchar(25)", nullable: true),
                    Nombre = table.Column<string>(type: "varchar(20)", nullable: true),
                    Apellido = table.Column<string>(type: "varchar(20)", nullable: true),
                    Direccion = table.Column<string>(type: "varchar(20)", nullable: true),
                    Ciudad = table.Column<string>(type: "varchar(15)", nullable: true),
                    Pais = table.Column<string>(type: "varchar(15)", nullable: true),
                    SobreDocente = table.Column<string>(type: "varchar(300)", nullable: true),
                    Foto = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Identificacion);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Docentes");
        }
    }
}
