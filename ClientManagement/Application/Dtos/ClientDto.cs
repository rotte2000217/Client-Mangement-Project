using System;
using System.Collections.Generic;

namespace Application.Dtos
{
    public class ClientDto
    {
        public string FullName { get; set; }

        public string Document { get; set; }

        public string Birthday { get; set; }

        public string MotherName { get; set; }

        public string FatherName { get; set; }

        public IEnumerable<EmailDto> Emails { get; set; }

        public IEnumerable<PhoneDto> Phones { get; set; }

        public IEnumerable<AddressDto> Addresses { get; set; }
    }
}
