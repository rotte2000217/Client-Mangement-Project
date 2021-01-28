
using Domain.Interfaces.Entity;

namespace Domain.entity
{
    public class Phone: BaseEntity
    {
        public virtual Client Client { get; set; }
        public int ClientId { get; set; }
        public string CountryCode { get; set; }
        public string AreaCode { get; set; }
        public string Number { get; set; }
        public ePhoneType Type { get; set; }
    }
}
