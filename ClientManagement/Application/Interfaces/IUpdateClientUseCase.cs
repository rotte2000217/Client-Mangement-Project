using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IUpdateClientUseCase
    {
        void Update(ClientDto dto);
    }
}
