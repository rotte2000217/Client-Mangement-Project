using System;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface ICreateClientUseCase
    {
        Task<bool> Create();
    }
}
