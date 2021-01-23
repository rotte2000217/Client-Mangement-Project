using System;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;

namespace Application.UseCases
{
    public class UpdateClientUseCase: IUpdateClientUseCase
    {
        public UpdateClientUseCase()
        {
        }

        public Task<bool> UpdateClient(ClientDto client)
        {
            throw new NotImplementedException();
        }
    }
}
