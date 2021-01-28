using System;
using Domain.entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Configurations
{
    public class PhoneConfiguration: IEntityTypeConfiguration<Phone>
    {
        public void Configure(EntityTypeBuilder<Phone> builder)
        {
            builder.ToTable("Emails");
            builder.Property(e => e.Id).HasColumnName("Id");
            builder.Property(e => e.AreaCode).HasColumnName("AreaCode");
            builder.Property(e => e.CountryCode).HasColumnName("CountryCode");
            builder.Property(e => e.Number).HasColumnName("Number");
            builder.Property(e => e.AreaCode).HasMaxLength(2);
            builder.Property(e => e.CountryCode).HasMaxLength(2);
            builder.Property(e => e.Number).HasMaxLength(9);
            builder.HasOne(e => e.Client);

        }
    }
}
