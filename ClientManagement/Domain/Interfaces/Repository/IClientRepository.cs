using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces.Services;

namespace Domain.Interfaces.Repository
{
    public interface IClientRepository: IBaseRepository<Client>
    {
        Task<Client> GetClientDetailed(int id);

    }
}
