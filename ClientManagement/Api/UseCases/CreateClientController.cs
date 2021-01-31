using System;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.UseCases
{
    public class CreateClientController : ControllerBase
    {
        private readonly ILogger<CreateClientController> _logger;
        private readonly ICreateClientUseCase _createClientUseCase;

        public CreateClientController(ILogger<CreateClientController> logger, ICreateClientUseCase createClientUseCase)
        {
            _logger = logger;
            _createClientUseCase = createClientUseCase;
        }


        [HttpPost]
        public ActionResult CreateClient(ClientDto client)
        {
            _createClientUseCase.RegisterAsync(client);
            return Ok();
        }
    }
}
