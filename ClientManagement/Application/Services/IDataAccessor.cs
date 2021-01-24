using System;
namespace Application.Services
{
    public interface IDataAccessor
    {
        Task<C>GetAllClientsSummary();
    }
}
