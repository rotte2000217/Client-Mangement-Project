using System;
using System.Threading.Tasks;
using Domain.Entities;
using Infra.Data.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class ApplicationDBContext : DbContext
    {
       public DbSet<Client> Clients { get; set; }
       public DbSet<Email> Emails { get; set; }
       public DbSet<Address> Addresses { get; set; }
       public DbSet<Phone> Phones { get; set; }


       public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options): base(options) { }

       protected override void OnModelCreating(ModelBuilder modelBuilder)
       {

           modelBuilder.ApplyConfiguration(new EmailConfiguration());
           modelBuilder.ApplyConfiguration(new ClientConfiguration());
           modelBuilder.ApplyConfiguration(new AddressConfiguration());
           modelBuilder.ApplyConfiguration(new PhoneConfiguration());
        }
    }
}
