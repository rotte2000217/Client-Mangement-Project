﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interfaces.Entity;

namespace Domain.Interfaces.Services
{
    public interface IBaseRepository <TEntity> where TEntity: BaseEntity
    {
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> GetByIdAsync(int id);
        Task<IEnumerable<TEntity>> GetAll();
        void Update(TEntity entity);
        void Delete(TEntity entity); 
    }
}
