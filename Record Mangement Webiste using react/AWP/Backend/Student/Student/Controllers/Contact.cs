using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;
namespace Technology_World.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Contact : Controller
    {


        private readonly QueryFactory db;
        public Contact(QueryFactory db)
        {
            this.db = db;
        }
        [HttpGet]
        public async Task<object> Contact_info()
        {

            var _Blog = await db.Query("contact").GetAsync();
            return _Blog;
        }
        [HttpPost]
        public async Task<object> Contact_info(c_info s)
        {
            var new_Blog = await db.Query("contact").InsertAsync(s);
            return new_Blog;
        }
    }
}
