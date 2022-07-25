using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;
namespace Employee.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Employee : Controller
    {
        private readonly QueryFactory db;
        public Employee(QueryFactory db)
        {
            this.db = db;
        }
        [HttpGet]
        public async Task<object> Employee_info()
        {

            var _Employee = await db.Query("Employee").GetAsync();
            return _Employee;
        }
        [HttpPost]
        public async Task<object> Employee_info(e_info s)
        {
            var new_Employee = await db.Query("Employee").InsertAsync(s);
            return new_Employee;
        }
        [HttpPut]
        public async Task<object> Employee_info(int id, e_info s)
        {
            var up_Employee = await db.Query("s_info").Where(new { id = id }).UpdateAsync(s);
            return up_Employee;
        }

        [HttpDelete]
        public async Task<object> Employee_info(int del_id)
        {
            var del_Employee = await db.Query("Employee").Where(new { id = del_id }).DeleteAsync();
            return del_Employee;
        }
    }
}
