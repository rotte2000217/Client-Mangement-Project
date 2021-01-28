using System;
using Newtonsoft.Json;

namespace Infra.CrossCutting.Commons.Extensions
{
    public static class JsonExtension
    {
        public static (bool IsParseOk, string Value, string ErrorMessage) TryParseToJson(this object obj)
        {
            try
            {
                return (true, JsonConvert.SerializeObject(obj), default);
            }
            catch(Exception ex)
            {
                return (false, default, ex.Message);
            }
        }
    }
}
