using System;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;

namespace Application.UseCases
{
    public class GetSummaryClientsUseCase: IGetSummaryClientsUseCase
    {
        public GetSummaryClientsUseCase()
        {
        }

        public Task<IEquatable<ClientSummaryDto>> GetClients()
        {
            throw new NotImplementedException();
        }
    }
}
