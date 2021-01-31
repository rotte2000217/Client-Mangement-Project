using System;

using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.UseCases.ListAllClients
{
    [ApiController]
    [Route("/Client")]
    public class GetClientsSummaryController : ControllerBase
    {
        private readonly ILogger<GetClientsSummaryController> _logger;
        private readonly IGetClientsSummaryUseCase _getClientSummaryUseCase;

        public GetClientsSummaryController(ILogger<GetClientsSummaryController> logger, IGetClientsSummaryUseCase getClientSummaryUseCase)
        {
            _logger = logger;
            _getClientSummaryUseCase = getClientSummaryUseCase;
        }

        [HttpGet]
        [Route("Ping")]
        public ActionResult Get()
        {
            return Ok("Pong");
        }


        [HttpGet]
        [Route("Summary/List")]
        public ActionResult GetClientSummaryList()
        {
            var clientList = _getClientSummaryUseCase.ListAllAsync();
            return Ok(clientList); 

        }
    }
}
