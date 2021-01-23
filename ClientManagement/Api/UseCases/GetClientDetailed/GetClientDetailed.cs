using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application;
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
            var addresses = new Address
            {
                AddressType = AddressType.Home,
                City = "Recife",
                Neighborhood = "Boa vista",
                Street = "Av manoel borba",
                StreetNumber = 324,
                ZipCode = "50070000",
            };

            var emails = new Email
            {
                EmailType = EmailType.Home,
                MailAddress = "felix_ruan09@hotmail.com"
            };

            var phones = new Telephone
            {
                Number = "81997095060",
                PhoneType = PhoneType.Main,
            };


            return Ok(new ClientDetailed
            {
                Addresses = ((IEnumerable<Address>)addresses),
                Telephones = ((IEnumerable<Telephone>)phones),
                Emails = ((IEnumerable<Email>)emails),
                Birthday = "09/02/1994",
                Document = "11169439489",
                MotherName = "Adriana",
                Name = "Felix Ruan",
            });

        }

    }
}
