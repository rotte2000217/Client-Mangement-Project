using System;
using System.Threading.Tasks;

namespace Domain.Interfaces.Services
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
    }
}
