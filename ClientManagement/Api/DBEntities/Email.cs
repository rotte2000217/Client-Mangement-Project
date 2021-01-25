using System;
using System.ComponentModel.DataAnnotations;

namespace Api
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
