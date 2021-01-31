using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IGetDetailedClientUseCase
    {
        Task<ClientDto> GetByIdAsync(int id);
    }
}
