using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IGetDetailedClient
    {
        Task<ClientDto> GetDetailedClient(string cpf);
    }
}
