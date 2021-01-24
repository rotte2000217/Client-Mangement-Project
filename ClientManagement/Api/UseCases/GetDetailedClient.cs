using System;
using Application.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.UseCases.GetClientDetailed
{
    [ApiController]
    [Route("[controller]")]
    public class GetClientDetailed : ControllerBase
    {
        private readonly ILogger<GetClientDetailed> _logger;
        private static Random random = new Random();

        public GetClientDetailed(ILogger<GetClientDetailed> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public ActionResult Get()
        {
            return Ok(new ClientDto
            {
            });

        }

    }
}
