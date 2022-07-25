using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;
namespace Technology_World.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Blog : Controller
    {
        private readonly QueryFactory db;
        public Blog(QueryFactory db)
        {
            this.db = db;
        }
        [HttpGet]
        public async Task<object> Blog_info()
        {

            var _Blog = await db.Query("blog").GetAsync();
            return _Blog;
        }
        [HttpPost]
        public async Task<object> Blog_info(b_info s)
        {
            var new_Blog = await db.Query("blog").InsertAsync(s);
            return new_Blog;
        }
        [HttpPut]
        public async Task<object> Blog_info(int id, b_info s)
        {
            var up_Blog = await db.Query("blog").Where(new { id = id }).UpdateAsync(s);
            return up_Blog;
        }

        [HttpDelete]
        public async Task<object> Blog_info(int del_id)
        {
            var del_Blog = await db.Query("blog").Where(new { id = del_id }).DeleteAsync();
            return del_Blog;
        }
    }
}
