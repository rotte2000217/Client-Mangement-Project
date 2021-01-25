using System;
using System.Linq;

namespace Api.Database
{

        public static class InicializaBD
        {
            public static void Initialize(ApplicationDBContext context)
            {
                context.Database.EnsureCreated();
                // Procura por livros
                if (context.Clients.Any())
                {
                    return;   //O BD foi alimentado
                }
            var addresses = new Address[]
            {

            };
            var emails = new Email[]
            {

            };
            var phones = new Phone[]
            {

            };
            var clients = new Client[]
            {
                    new Client{
                        Addresses=addresses,
                        Birthday="09/02/1994",
                        Document="11169439489",
                        Emails=emails,
                        FatherName="Rogério",
                        FullName="Felix Ruan Dias Freitas",
                        MotherName="Adriana",
                        Phones=phones,
                    },
            };
                foreach (Client p in clients)
                {
                    context.Clients.Add(p);
                }
                context.SaveChanges();
            }
        }
}
