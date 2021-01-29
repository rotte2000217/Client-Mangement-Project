
namespace Domain.Entities
{
    public class Address: BaseEntity
    {
        public virtual Client Client { get; set; }

        public int ClientId { get; set; }

        public string Street { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public int StreetNumber { get; set; }

        public string ZipCode { get; set; }
    }
}
