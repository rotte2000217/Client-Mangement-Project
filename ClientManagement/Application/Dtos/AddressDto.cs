using System;
namespace Application.Dtos
{
    public class AddressDto: BaseDto
    {
        public string Street { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public int StreetNumber { get; set; }

        public string ZipCode { get; set; }
    }
}
