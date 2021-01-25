﻿using System;
using System.Threading.Tasks;
using Application.Dtos;

namespace Application.Interfaces
{
    public interface ICreateClientUseCase
    {
        Task<bool> CreateClient(ClientDto client);
    }
}