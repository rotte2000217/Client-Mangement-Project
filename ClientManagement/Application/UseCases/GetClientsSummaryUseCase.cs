using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.UseCases
{
    public class GetClientsSummaryUseCase : IGetClientsSummaryUseCase
    {
        private readonly ILogger<GetClientsSummaryUseCase> _logger;
        private readonly IClientService _clientService;

        public GetClientsSummaryUseCase(ILogger<GetClientsSummaryUseCase> logger, IClientService clientService)
        {
            _logger = logger;
            _clientService = clientService;
        }

        public Task<List<ClientSummaryDto>> ListAllAsync()
        {
            var clientSummaryList = _clientService.GetAllAsync();
            return null;
        }
    }
}
