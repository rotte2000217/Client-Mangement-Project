using System;
using System.Threading.Tasks;
using Application.Interfaces;

namespace Application.UseCases
{
    public class DeleteClientUseCase: IDeleteClientUseCase
    {
        public DeleteClientUseCase()
        {
        }

        public Task<bool> DeleteClient(string id)
        {
            throw new NotImplementedException();
        }
    }
}
