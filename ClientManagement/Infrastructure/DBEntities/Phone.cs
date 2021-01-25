using System;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure
{
    public class Phone
    {
        [Key]
        public int Id { get; set; }
        public Client Client { get; set; }
        public int ClientId { get; set; }
        public string CountryCode { get; set; }
        public string AreaCode { get; set; }
        public string Number { get; set; }
        public ePhoneType Type { get; set; }
    }
}
