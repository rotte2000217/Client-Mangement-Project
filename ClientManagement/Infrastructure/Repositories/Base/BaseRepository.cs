using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces.Services;
using Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Repositories.Base
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly DbSet<TEntity> DbSet;

        public BaseRepository(ApplicationDBContext applicationDBContext)
        {
            DbSet = applicationDBContext.Set<TEntity>();
        }

        public async Task<TEntity> AddAsync(TEntity entity)
        {
            var result = await DbSet.AddAsync(entity);
            return result.Entity;
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
            var result = await DbSet.FindAsync(id);
            return result;
        }

        public async Task<List<TEntity>> GetAllAsync()
        {
            var result = await DbSet.ToListAsync();
            return result;
        }

        public void Update(TEntity entity)
        {
            DbSet.Update(entity);
        }

        public void Delete(int id)
        {
            var entity = GetById(id);
            DbSet.Remove(entity);
        }

        private TEntity GetById(int id)
        {
            var entity = DbSet.Find(id);
            return entity;
        }
    }
}
