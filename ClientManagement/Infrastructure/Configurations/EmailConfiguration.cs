using System;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Configurations
{
    public class EmailConfiguration: IEntityTypeConfiguration<Email>
    {
        public void Configure(EntityTypeBuilder<Email> builder)
        {
            builder.ToTable("Emails");
            builder.Property(e => e.Id).HasColumnName("Id");
            builder.Property(e => e.EmailAddress).HasColumnName("EmailAddress");
            builder.Property(e => e.EmailAddress).HasMaxLength(255);
            builder.HasOne(e => e.Client);

        }
    }
}
