using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces.Repository;
using Domain.Interfaces.Services;

namespace Domain.Services
{
    public class ClientService : IClientService
    {

        private readonly IClientRepository _repository;

        public ClientService(IClientRepository repository)
        {
            _repository = repository;
        }

        public async Task<Client> FindByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<Client>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Client> RegisterAsync(Client client)
        {
            return await _repository.AddAsync(client);
        }

        public void Update(Client client)
        {
            _repository.Update(client);
        }

        public void Delete(Client client)
        {
            _repository.Delete(client);
        }
    }
}
