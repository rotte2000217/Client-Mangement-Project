using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IGetClientsSummaryUseCase
    {
        Task<List<ClientSummaryDto>> ListAllAsync();
    }
}
