

namespace Domain.Entities
{
    public class Email: BaseEntity
    {
        public virtual Client Client { get; set; }

        public int ClientId { get; set; }

        public string EmailAddress { get; set; }
    }
}
