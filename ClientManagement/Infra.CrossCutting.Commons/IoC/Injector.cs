using System;
using Application.Interfaces;
using Application.Services;
using Domain.Interfaces.Repository;
using Domain.Interfaces.Services;
using Domain.Services;
using Infra.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
namespace Infra.CrossCutting.Commons.IoC
{
    public static class Injector
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            RegisterInfraServices(services);
            RegisterDomainServices(services);
            RegisterApplicationServices(services);

            return services;
        }

        private static void RegisterDomainServices(IServiceCollection services)
        {
            services.AddTransient<IClientService, ClientService>();
        }

        private static void RegisterApplicationServices(IServiceCollection services)
        {
            services.AddTransient<IClientManagementService, ClientManagementService>();
        }

        private static void RegisterInfraServices(IServiceCollection services)
        {
            #region repositories
            services.AddTransient<IClientRepository, ClientRepository>();

            #endregion
        }
    }
}
