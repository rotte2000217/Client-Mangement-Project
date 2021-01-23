using System;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;

namespace Application.UseCases
{
    public class GetDetailedClient : IGetDetailedClient
    {
        public GetDetailedClient()
        {
        }

        Task<ClientDto> IGetDetailedClient.GetDetailedClient(string cpf)
        {
            throw new NotImplementedException();
        }
    }
}
