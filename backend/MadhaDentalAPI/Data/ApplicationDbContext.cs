using Microsoft.EntityFrameworkCore;
using MadhaDentalAPI.Models;

namespace MadhaDentalAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<News> News { get; set; }

        public DbSet<AdminUser> AdminUsers { get; set; }
    }
}