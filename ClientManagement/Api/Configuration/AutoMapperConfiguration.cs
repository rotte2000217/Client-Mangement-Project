using System;
using Application.AutoMapper;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Configuration
{
    public static class AutoMapperConfiguration
    {
        public static IServiceCollection AddAutoMapperConfiguration(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddAutoMapper(typeof(DtoProfile));
            Application.AutoMapper.Configuration.RegisterConfigs();
            return serviceCollection;
        }
    }
}
