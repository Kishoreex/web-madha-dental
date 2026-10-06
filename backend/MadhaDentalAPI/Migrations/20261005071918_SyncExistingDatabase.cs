using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MadhaDentalAPI.Migrations
{
    /// <inheritdoc />
    public partial class SyncExistingDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // The database already contains the required tables.
            // This migration only synchronizes EF migration history.
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Intentionally empty.
        }
    }
}