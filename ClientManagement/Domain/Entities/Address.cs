using System;
namespace Domain.Entities
{
    public class Address
    {
        public string Street { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public int StreetNumber { get; set; }

        public string ZipCode { get; set; }
    }
}
