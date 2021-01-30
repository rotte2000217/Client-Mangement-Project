using System;
using Application.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.UseCases.GetClientDetailed
{
    [ApiController]
    [Route("client/")]
    public class GetClientDetailed : ControllerBase
    {
        private readonly ILogger<GetClientDetailed> _logger;

        public GetClientDetailed(ILogger<GetClientDetailed> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        [Route("/{id?}")]
        public ActionResult GetSummaryList(int? id)
        {
            return null;

        }

    }
}
