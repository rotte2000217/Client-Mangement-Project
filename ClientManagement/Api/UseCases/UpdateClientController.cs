using System;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.UseCases
{
    [ApiController]
    [Route("/Client")]
    public class UpdateClientController : ControllerBase
    {
        private readonly ILogger<UpdateClientController> _logger;
        private readonly IUpdateClientUseCase _updateClientUseCase;

        public UpdateClientController(ILogger<UpdateClientController> logger, IUpdateClientUseCase updateClientUseCase)
        {
            _logger = logger;
            _updateClientUseCase = updateClientUseCase;
        }


        [HttpPut]
        public ActionResult UpdateClient(ClientDto client)
        {
            _updateClientUseCase.Update(client);
            return Ok();

        }

    }
}
