using System;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.UseCases
{
    public class GetDetailedClientUseCase : IGetDetailedClientUseCase
    {

        private readonly IClientService _clientService;
        private readonly IUnitOfWork _unitOfWork;

        public GetDetailedClientUseCase(ILogger<GetDetailedClientUseCase> logger, IClientService clientService)
        {
        }

        public Task<ClientDto> GetById(int id)
        {
            var clientDto = _clientService.FindByIdAsync(id);
            return null; //MAPPING ?? 
        }
    }
}
