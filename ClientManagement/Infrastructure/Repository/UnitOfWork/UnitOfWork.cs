using System;
using System.Threading.Tasks;
using Domain.Interfaces.Services;
using Infrastructure;

namespace Infra.Data.Repository.UnitOfWork
{
    public class UnitOfWork: IUnitOfWork
    {
        private readonly ApplicationDBContext _applicationDBContext;

        public UnitOfWork(ApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
        }

        public async Task<bool> CommitAsync()
        {
            var rowsAffected = await _applicationDBContext.SaveChangesAsync();

            return rowsAffected > 0;
        }
    }
}
