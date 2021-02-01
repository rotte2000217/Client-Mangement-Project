using System;
using System.Collections.Generic;
using Application.Dtos;
using AutoMapper;
using Domain.Entities;

namespace Application.AutoMapper
{
    public class DtoProfile: Profile
    {
        public DtoProfile()
        {
            CreateMap<AddressDto, Address>().ReverseMap();
            CreateMap<ClientDto, Client>().ReverseMap();
            CreateMap<BaseDto, BaseEntity>().ReverseMap();
            CreateMap<PhoneDto, Phone>().ReverseMap();
            CreateMap<ePhoneTypeDto, ePhoneType>().ReverseMap();
            CreateMap<EmailDto, Email>().ReverseMap();
            CreateMap<ClientSummaryDto, Client>().ReverseMap();
        }
    }
}
