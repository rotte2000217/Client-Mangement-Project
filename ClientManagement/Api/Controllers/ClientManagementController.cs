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
        public async System.Threading.Tasks.Task<ActionResult> GetClientSummaryListAsync()
        {
            var clientList = await _clientManagementService.ListAllAsync();
            return Ok(clientList);

        }

        [HttpGet]
        [Route("{id?}")]
        public async System.Threading.Tasks.Task<ActionResult> GetDetailedClientAsync(int id)
        {
            var clientList = await _clientManagementService.GetByIdAsync(id);
            return Ok(clientList);

        }

        [HttpPost]
        public async System.Threading.Tasks.Task<ActionResult> CreateClient(ClientDto client)
        {
            await _clientManagementService.RegisterAsync(client);
            return Ok();
        }

        [HttpDelete]
        [Route("{id?}")]
        public async System.Threading.Tasks.Task<ActionResult> DeleteClient(int id)
        {
            await _clientManagementService.Delete(id);
            return Ok();
        }

        [HttpPut]
        public async System.Threading.Tasks.Task<ActionResult> UpdateClient(ClientDto client)
        {
            await _clientManagementService.Update(client);
            return Ok();

        }

    }
}
