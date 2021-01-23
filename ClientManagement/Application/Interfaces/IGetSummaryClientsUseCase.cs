using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface IGetSummaryClientsUseCase
    {
        Task<IEquatable<ClientSummaryDto>> GetClients();
    }
}
