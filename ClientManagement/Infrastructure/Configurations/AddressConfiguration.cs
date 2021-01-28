using System;
using Domain.entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Configurations
{
    public class AddressConfiguration: IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("Addresses");
            builder.Property(e => e.Id).HasColumnName("Id");
            builder.Property(e => e.City).HasColumnName("City");
            builder.Property(e => e.Neighborhood).HasColumnName("Neighborhood");
            builder.Property(e => e.Street).HasColumnName("Street");
            builder.Property(e => e.StreetNumber).HasColumnName("StreetNumber");
            builder.Property(e => e.ZipCode).HasColumnName("ZipCode");
            builder.Property(e => e.City).HasMaxLength(100);
            builder.Property(e => e.Neighborhood).HasMaxLength(50);
            builder.Property(e => e.Street).HasMaxLength(255);
            builder.Property(e => e.StreetNumber).HasMaxLength(50);
            builder.Property(e => e.ZipCode).HasMaxLength(8);
            builder.HasOne(e => e.Client);
        }
    }
}
