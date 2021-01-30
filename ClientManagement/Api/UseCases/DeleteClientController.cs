using System;
using Application.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace Api.UseCases
{
    [ApiController]
    [Route("[controller]")]
    public class DeleteClient
    {
        private readonly ILogger<DeleteClient> _logger;
        private static Random random = new Random();

        public DeleteClient(ILogger<DeleteClient> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public ActionResult Delete(string id)
        {
            return null; 
        }
    }
}

