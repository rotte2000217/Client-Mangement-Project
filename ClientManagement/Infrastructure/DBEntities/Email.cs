using System;
using System.ComponentModel.DataAnnotations;
using Infrastructure;

namespace Domain.Entities
{
    public class Email
    {
        [Key]
        public int Id { get; set; }

        public Client Client { get; set; }

        public int ClientId { get; set; }

        public string EmailAddress { get; set; }
    }
}
