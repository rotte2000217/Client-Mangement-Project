using System;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Configurations
{
    public class PhoneConfiguration: IEntityTypeConfiguration<Phone>
    {
        public void Configure(EntityTypeBuilder<Phone> builder)
        {
            builder.ToTable("Phones");
            builder.Property(e => e.Id).HasColumnName("Id");
            builder.Property(e => e.AreaCode).HasColumnName("AreaCode");
            builder.Property(e => e.CountryCode).HasColumnName("CountryCode");
            builder.Property(e => e.Number).HasColumnName("Number");
            builder.Property(e => e.AreaCode).IsRequired();
            builder.Property(e => e.CountryCode).IsRequired();
            builder.Property(e => e.Number).IsRequired();
            builder.HasOne(e => e.Client);

        }
    }
}
