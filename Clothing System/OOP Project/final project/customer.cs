using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project
{
    class customer : User
    {
        public string balance { get; set; }
        public string creditNo { get; set;}
        public customer()
        {
            balance = null;
            creditNo = null;
       
        }
    }
}
