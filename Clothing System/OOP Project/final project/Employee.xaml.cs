using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using MaterialDesignExtensions;
using System.IO;
namespace final_project
{
    /// <summary>
    /// Interaction logic for Employee.xaml
    /// </summary>
    public partial class Employee : Window
    {
        public Employee()
        {
            
            InitializeComponent();
        }

        private void Log_In(object sender, RoutedEventArgs e)
        {
            int n = 0;
            string path = "TextFile2.txt";
            string[] data;
            data = File.ReadAllLines(path);
            foreach (string line in data) { ++n; };
            employee[] emp = new employee[n];
            for (int i = 0; i < n; i++)
            {
                emp[i] = new employee();
            }
            for (int i = 0; i < n; i++)
            {
                string[] temp = data[i].Split(',');
                emp[i].username = temp[0];
                emp[i].pass = temp[1];
            }
            bool flg=false;
            string name = UserNameTB.Text;
            string password = Box.Password;
            for (int i = 0; i < n; i++)
            {
                if (emp[i].login(name, password, emp[i]))
                {
                    flg = true;
                    break;
                }
            }
            if (flg)
            {
                this.Hide();
                afterloginEmployee obj = new afterloginEmployee();
                obj.Show();
            }
            else
            {
                MessageBox.Show("Username or Password is incorrect ", "Error");
            }
            //List<int> arr=new List<int>();
            //arr.Add(1);
            //arr.Add(22);
            //arr.Remove(22);
            //foreach (var item in arr)
            //{
            //    MessageBox.Show(Convert.ToString(item), "Data");
            //}
            //;
            //MessageBox.Show(name, "Info");
        }
       
        private void UserNameTB_TextChanged(object sender, TextChangedEventArgs e)
        {

        }

        private void Back(object sender, RoutedEventArgs e)
        {
            this.Hide();
            MainWindow obj = new MainWindow();
            obj.Show();
        }

        private void UserNameTB_MouseEnter(object sender, MouseEventArgs e)
        {

        }
    }
}
