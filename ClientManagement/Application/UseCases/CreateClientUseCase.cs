using System;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.CreateClient
{
    public class CreateClientUseCase : ICreateClientUseCase
    {
        private readonly ILogger<CreateClientUseCase> _logger;
        private readonly IClientService _clientService;
        private readonly IUnitOfWork _unitOfWork;

        public CreateClientUseCase(ILogger<CreateClientUseCase> logger, IClientService clientService, IUnitOfWork unitOfWork)
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
    }
}
