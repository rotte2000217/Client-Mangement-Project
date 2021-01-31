using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.Services
{
    public class ClientManagementService : IClientManagementService
    {
        private readonly ILogger<ClientManagementService> _logger;
        private readonly IClientService _clientService;
        private readonly IUnitOfWork _unitOfWork;

        public ClientManagementService(ILogger<ClientManagementService> logger, IClientService clientService, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _clientService = clientService;
            _unitOfWork = unitOfWork;
        }

        public Task<int> RegisterAsync(ClientDto clientDto)
        {
            var clientId = _clientService.RegisterAsync(null); //convert clientDto to expected object
            return null;
        }

        public Task<List<ClientSummaryDto>> ListAllAsync()
        {
            var clientSummaryList = _clientService.GetAllAsync();
            return null;
        }

        public Task<ClientDto> GetByIdAsync(int id)
        {
            var clientDto = _clientService.FindByIdAsync(id);
            return null; //MAPPING ?? 
        }

        public void Update(ClientDto dto)
        {
            _clientService.Update(null); //convert dto to expected object
        }

        public void Delete(int id)
        {
            _clientService.Delete(id);
        }
    }
}
