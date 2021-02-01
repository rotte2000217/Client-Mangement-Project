using System;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Configurations
{
    public class ClientConfiguration: IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.ToTable("Clients");
            builder.Property(e => e.Id).HasColumnName("Id");
            builder.Property(e => e.Birthday).HasColumnName("Birthday");
            builder.Property(e => e.Document).HasColumnName("Document");
            builder.Property(e => e.FatherName).HasColumnName("FatherName");
            builder.Property(e => e.FullName).HasColumnName("FullName");
            builder.Property(e => e.MotherName).HasColumnName("MotherName");
            builder.HasIndex(e => e.Document).IsUnique();
            builder.Property(e => e.Birthday).HasMaxLength(10);
            builder.Property(e => e.Document).HasMaxLength(11);
            builder.Property(e => e.FatherName).HasMaxLength(255);
            builder.Property(e => e.FullName).HasMaxLength(255);
            builder.Property(e => e.MotherName).HasMaxLength(255);
            builder.HasMany(e => e.Phones);
            builder.HasMany(e => e.Emails);
            builder.HasMany(e => e.Addresses);

        }
    }
}

