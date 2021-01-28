using System.Collections.Generic;
using Domain.Interfaces.Entity;

namespace Domain.entity
{
    public class Client: BaseEntity
    {
        public string FullName { get; set; }

        public string Document { get; set; }

        public string Birthday { get; set; }

        public string MotherName { get; set; }

        public string FatherName { get; set; }

        public IEnumerable<Email> Emails { get; set; }

        public IEnumerable<Phone> Phones { get; set; }

        public IEnumerable<Address> Addresses { get; set; }
    }
}
