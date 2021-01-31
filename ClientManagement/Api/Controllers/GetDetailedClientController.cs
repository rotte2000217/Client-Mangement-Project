using System;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.UseCases.GetClientDetailed
{
    [ApiController]
    [Route("/Client")]
    public class GetClientDetailedController : ControllerBase
    {
        private readonly ILogger<GetClientDetailedController> _logger;
        private readonly IGetDetailedClientUseCase _getDetailedClientUseCase;

        public GetClientDetailedController(ILogger<GetClientDetailedController> logger, IGetDetailedClientUseCase getDetailedClientUseCase)
        {
            _logger = logger;
            _getDetailedClientUseCase = getDetailedClientUseCase;
        }


        [HttpGet]
        [Route("{id?}")]
        public ActionResult GetDetailedClient(int id)
        {
            var clientList = _getDetailedClientUseCase.GetByIdAsync(id);
            return Ok(clientList);

        }

    }
}
