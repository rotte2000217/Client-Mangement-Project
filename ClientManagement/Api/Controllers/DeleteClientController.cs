using System;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace Api.UseCases
{
    [ApiController]
    [Route("/Client")]
    public class DeleteClientController : ControllerBase
    {
        private readonly ILogger<DeleteClientController> _logger;
        private readonly IDeleteClientUseCase _deleteClientUseCase;

        public DeleteClientController(ILogger<DeleteClientController> logger, IDeleteClientUseCase deleteClientUseCase)
        {
            _logger = logger;
            _deleteClientUseCase = deleteClientUseCase;
        }


        [HttpDelete]
        [Route("{id?}")]
        public ActionResult DeleteClient(int id)
        {
            _deleteClientUseCase.Delete(id);
           return Ok();
        }
    }
}

