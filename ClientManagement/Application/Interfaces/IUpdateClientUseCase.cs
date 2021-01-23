using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IUpdateClientUseCase
    {
        Task<bool> UpdateClient(ClientDto client);
    }
}
