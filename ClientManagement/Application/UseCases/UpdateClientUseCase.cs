using System;
using System.Threading.Tasks;
using Application.CreateClient;
using Application.Dtos;
using Application.Interfaces;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.UseCases
{
    public class UpdateClientUseCase: IUpdateClientUseCase
    {
        private readonly ILogger<UpdateClientUseCase> _logger;
        private readonly IClientService _clientService;
        private readonly IUnitOfWork _unitOfWork;
        public UpdateClientUseCase(IClientService clientService, IUnitOfWork unitOfWork, ILogger<UpdateClientUseCase> logger)
        {
            _clientService = clientService;
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        public void Update(ClientDto dto)
        {
            _clientService.Update(null); //convert dto to expected object
        }
    }
}
