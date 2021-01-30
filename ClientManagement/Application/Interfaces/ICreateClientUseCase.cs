using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface ICreateClientUseCase
    {
        Task<int> RegisterAsync(ClientDto clientDto);
    }
}
