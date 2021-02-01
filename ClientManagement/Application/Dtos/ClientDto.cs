using System;
using System.Collections.Generic;

namespace Application.Dtos
{
    public class ClientDto: BaseDto
    {
        public string FullName { get; set; }

        public string Document { get; set; }

        public string Birthday { get; set; }

        public string MotherName { get; set; }

        public string FatherName { get; set; }

        public List<EmailDto> Emails { get; set; }

        public List<PhoneDto> Phones { get; set; }

        public List<AddressDto> Addresses { get; set; }

    }
}
