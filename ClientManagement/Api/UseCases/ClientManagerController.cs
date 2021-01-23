using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ContactManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientManagerController : ControllerBase
    {
        private readonly ILogger<ClientManagerController> _logger;
        private static Random random = new Random();

        public ClientManagerController(ILogger<ClientManagerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public String Get()
        {
            return "index";
        }
        

       [HttpGet]
        [Route("/list")]
        public ActionResult GetList()
        {
            var rng = new Random();
            return Ok(Enumerable.Range(1, 5).Select(index => new ClientCardInfo
            {
                Document = RandomString(11),
                Email = "felix_ruan09@hotmail.com",
                Name = "Felix Ruan"
            })
            .ToArray());

        }


        public static string RandomString(int length)
        {
            const string chars = "0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
