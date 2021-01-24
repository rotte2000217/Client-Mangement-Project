using System;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.Extensions.Logging;

namespace Application.CreateClient
{
    public class CreateClientUseCase : ICreateClientUseCase
    {
        private readonly ILogger<CreateClientUseCase> _logger;


        public CreateClientUseCase(ILogger<CreateClientUseCase> logger)
        {
            _logger = logger;
        }

        public Task<bool> CreateClient(ClientDto client)
        {
            throw new NotImplementedException();
        }
    }
}
