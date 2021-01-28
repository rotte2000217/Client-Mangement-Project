using System;
using System.ComponentModel.DataAnnotations;
using Infrastructure;

namespace Infrastructure
{
    public class Address
    {
        [Key]
        public string Id { get; set; }

        public Client Client { get; set; }

        public int ClientId { get; set; }

        public string Street { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public int StreetNumber { get; set; }

        public string ZipCode { get; set; }
    }
}
