using System;
using Domain.Enums;

namespace Domain.Entities
{
    public class Phone
    {
        public string CountryCode { get; set; }
        public string AreaCode { get; set; }
        public string Number { get; set; }
        public ePhoneType Type { get; set; }
    }
}
