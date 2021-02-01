using System.Collections.Generic;

namespace Domain.Entities
{
    public class Client: BaseEntity
    {
        public string FullName { get; set; }

        public string Document { get; set; }

        public string Birthday { get; set; }

        public string MotherName { get; set; }

        public string FatherName { get; set; }

        public List<Email> Emails { get; set; }

        public List<Phone> Phones { get; set; }

        public List<Address> Addresses { get; set; }
    }
}
