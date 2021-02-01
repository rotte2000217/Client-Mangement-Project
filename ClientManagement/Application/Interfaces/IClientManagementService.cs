using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IClientManagementService
    {
        Task<int> RegisterAsync(ClientDto clientDto);
        Task<List<ClientSummaryDto>> ListAllAsync();
        Task<ClientDto> GetByIdAsync(int id);
        Task<bool> Update(ClientDto dto);
        Task<bool> Delete(int id);
    }
}
