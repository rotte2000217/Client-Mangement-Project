using System;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ClientManagementContext : DbContext
    {
        public DbSet<Client> Client { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("");
        }
    }
}
