using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IClientAppService
    {
        Task<List<ClientSummaryDto>> ListAllAsync();
        Task<ClientDto> GetById();
        Task<int> RegisterAsync(ClientDto dto);
        void Update(ClientDto dto);
        void Delete(ClientDto dto); //Talvez passar o ID apenas. 
    }
}
