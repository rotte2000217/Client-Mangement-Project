using System;
using System.Threading.Tasks;
using Application.CreateClient;
using Application.Interfaces;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.UseCases
{
    public class DeleteClientUseCase: IDeleteClientUseCase
    {
        private readonly ILogger<DeleteClientUseCase> _logger;
        private readonly IClientService _clientService;

        public DeleteClientUseCase(ILogger<DeleteClientUseCase> logger, IClientService clientService)
        {
            _logger = logger;
            _clientService = clientService;
        }

        public void Delete(int id)
        {
            _clientService.Delete(id);
        }
    }
}
