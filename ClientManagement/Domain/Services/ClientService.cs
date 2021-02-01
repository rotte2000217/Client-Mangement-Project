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
            return await _repository.GetClientDetailed(id);
        }

        public async Task<IEnumerable<Client>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Client> RegisterAsync(Client client)
        {
            return await _repository.AddAsync(client);
        }

        public async Task UpdateAsync(Client client)
        {
            var clientDB = await FindByIdAsync(client.Id);
            clientDB.Phones.Clear();
            clientDB.Emails.Clear();
            clientDB.Addresses.Clear();
            client.Emails.ForEach(x => clientDB.Emails.Add(x));
            client.Addresses.ForEach(x => clientDB.Addresses.Add(x));
            client.Phones.ForEach(x => clientDB.Phones.Add(x));
            clientDB.Birthday = client.Birthday;
            clientDB.Document = client.Document;
            clientDB.FullName = client.FullName;
            clientDB.MotherName = client.MotherName;
            _repository.Update(clientDB);
        }

        public void Delete(int id)
        {
            _repository.Delete(id);
        }
    }
}
