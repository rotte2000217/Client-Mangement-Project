using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Client
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