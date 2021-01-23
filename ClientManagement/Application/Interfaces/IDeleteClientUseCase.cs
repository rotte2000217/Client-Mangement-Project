using System;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IDeleteClientUseCase
    {
        Task<bool> DeleteClient(string id);
    }
}
