using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;
namespace Technology_World.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Status : Controller
    {
        private readonly QueryFactory db;
        public Status(QueryFactory db)
        {
            this.db = db;
        }
        [HttpGet]
        public async Task<object> Status_info()
        {

            var _Status = await db.Query("status").GetAsync();
            return _Status;
        }
        [HttpPost]
        public async Task<object> Status_info(s_info s)
        {
            var new_Status = await db.Query("status").InsertAsync(s);
            return new_Status;
        }
        [HttpPut]
        public async Task<object> Status_info(int id, s_info s)
        {
            var up_Status = await db.Query("status").Where(new { id = id }).UpdateAsync(s);
            return up_Status;
        }

       
    }
}
