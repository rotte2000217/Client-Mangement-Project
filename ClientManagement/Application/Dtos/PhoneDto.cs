﻿using System;
namespace Application.Dtos
{
    public class PhoneDto: BaseDto
    {
        public string CountryCode { get; set; }
        public string AreaCode { get; set; }
        public string Number { get; set; }
        public ePhoneTypeDto Type { get; set; }
    }
}
