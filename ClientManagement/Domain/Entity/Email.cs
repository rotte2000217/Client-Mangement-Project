
using Domain.Interfaces.Entity;

namespace Domain.entity
{
    public class Email: BaseEntity
    {
        public virtual Client Client { get; set; }

        public int ClientId { get; set; }

        public string EmailAddress { get; set; }
    }
}
