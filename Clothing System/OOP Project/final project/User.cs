using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.IO;
namespace final_project
{
    class User
    {
        public string username{get; set;}
        public string pass { get; set; }
        public User()
        {
            username = null;
            pass = null;
        }
        public  bool login(string username,string password,User data) {
            if (username == data.username)
            {
                if (password == data.pass)
                {
                    
                    return true;
                }
            }
            return false;
        }
        public void add(string data, string path)
        {
            using (StreamWriter sw = File.AppendText(path))
            {
                sw.WriteLine( data);
            }
        }

    }
}
