using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using Domain.Interfaces.Services;

namespace Application.Services
{
    public class ClientAppService: IClientAppService
    {
        private readonly IClientService _clientService;
        private readonly IUnitOfWork _unitOfWork;

        public ClientAppService(IClientService clientService, IUnitOfWork unitOfWork)
        {
            _clientService = clientService;
            _unitOfWork = unitOfWork;
        }

        public void Delete(ClientDto dto)
        {
            throw new NotImplementedException();
        }

        public Task<ClientDto> GetById()
        {
            throw new NotImplementedException();
        }

        public Task<List<ClientSummaryDto>> ListAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> RegisterAsync(ClientDto dto)
        {
            throw new NotImplementedException();
        }

        public void Update(ClientDto dto)
        {
            throw new NotImplementedException();
        }
    }
}
