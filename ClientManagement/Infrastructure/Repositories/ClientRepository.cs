using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces.Repository;
using Infra.Data.Repositories.Base;
using Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Repositories
{
    public class ClientRepository: BaseRepository<Client>,  IClientRepository
    {
        private ApplicationDBContext _applicationDBContext;
        public ClientRepository(ApplicationDBContext applicationDBContext): base(applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
        }

        public async Task<Client> GetClientDetailed(int id)
        {
            var clientDetailed = await _applicationDBContext.Clients.Where(e => e.Id == id)
                .Include(e => e.Emails)
                .Include(e => e.Addresses)
                .Include(e => e.Phones)
                .FirstOrDefaultAsync();
            return clientDetailed;
        }
    }
}
