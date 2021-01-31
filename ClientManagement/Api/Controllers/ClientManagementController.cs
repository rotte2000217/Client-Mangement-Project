using System;
using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace Api.Controllers
{
    [ApiController]
    [Route("/Client")]
    public class ClientManagementController : ControllerBase
    {
        private readonly ILogger<ClientManagementController> _logger;
        private readonly IClientManagementService _clientManagementService;

        public ClientManagementController(ILogger<ClientManagementController> logger, IClientManagementService clientManagementService)
        {
            _logger = logger;
            _clientManagementService = clientManagementService;
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
            var clientList = _clientManagementService.ListAllAsync();
            return Ok(clientList);

        }

        [HttpGet]
        [Route("{id?}")]
        public ActionResult GetDetailedClient(int id)
        {
            var clientList = _clientManagementService.GetByIdAsync(id);
            return Ok(clientList);

        }

        [HttpPost]
        public ActionResult CreateClient(ClientDto client)
        {
            _clientManagementService.RegisterAsync(client);
            return Ok();
        }

        [HttpDelete]
        [Route("{id?}")]
        public ActionResult DeleteClient(int id)
        {
            _clientManagementService.Delete(id);
            return Ok();
        }

        [HttpPut]
        public ActionResult UpdateClient(ClientDto client)
        {
            _clientManagementService.Update(client);
            return Ok();

        }

    }
}
