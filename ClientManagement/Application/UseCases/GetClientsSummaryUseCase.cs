using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;
using Application.Interfaces;


namespace Application.UseCases
{
    public class GetClientsSummaryUseCase : IGetClientsSummaryUseCase
    {

        public GetClientsSummaryUseCase()
        {
        }

        public Task<IEnumerable<ClientSummaryDto>> GetClients()
        {
            throw new NotImplementedException();
        }
    }
}
