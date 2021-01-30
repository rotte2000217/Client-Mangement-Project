using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ContactManager.Controllers
{
    [ApiController]
    [Route("/client")]
    public class ClientManagerController : ControllerBase
    {
        private readonly ILogger<ClientManagerController> _logger;
        private readonly ICreateClientUseCase _createClientUserCase;
        public ClientManagerController(ILogger<ClientManagerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("summary/list")]
        public ActionResult GetSummaryList()
        {
            return null;

        }

    }
}
