using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;

namespace Application.Services
{
    public class ClientManagementService : IClientManagementService
    {
        private readonly ILogger<ClientManagementService> _logger;
        private readonly IClientService _clientService;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public ClientManagementService(ILogger<ClientManagementService> logger, IClientService clientService, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _logger = logger;
            _clientService = clientService;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> RegisterAsync(ClientDto clientDto)
        {
            var client = await _clientService.RegisterAsync(_mapper.Map<Client>(clientDto));
            await _unitOfWork.CommitAsync();
            return client.Id;
        }

        public async Task<List<ClientSummaryDto>> ListAllAsync()
        {
            var clients = await _clientService.GetAllAsync();
            return _mapper.Map<List<ClientSummaryDto>>(clients);
        }

        public async Task<ClientDto> GetByIdAsync(int id)
        {
            var client = await _clientService.FindByIdAsync(id);
            return _mapper.Map <ClientDto> (client);
        }

        public async Task<bool> Update(ClientDto dto)
        {
            await _clientService.UpdateAsync(_mapper.Map<Client>(dto));
            return await _unitOfWork.CommitAsync();
        }

        public async Task<bool> Delete(int id)
        {
            _clientService.Delete(id);
            return await _unitOfWork.CommitAsync();
        }
    }
}
