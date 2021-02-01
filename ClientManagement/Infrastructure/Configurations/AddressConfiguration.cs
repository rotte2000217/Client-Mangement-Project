using System;
using Domain.Entities;
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
            builder.HasOne(e => e.Client);
        }
    }
}
