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
using System.IO;
namespace final_project
{
    /// <summary>
    /// Interaction logic for Customer.xaml
    /// </summary>
    public partial class Customer : Window
    {
        public Customer()
        {
            InitializeComponent();
        }

        private void Log_In(object sender, RoutedEventArgs e)
        {
            int n = 0;
            string path = "TextFile1.txt";
            string[] data;
            data = File.ReadAllLines(path);
            foreach (string line in data) { ++n; };
            customer[] cus = new customer[n];
            for (int i = 0; i < n; i++)
            {
                cus[i] = new customer();
            }
            for (int i = 0; i < n; i++)
            {
                string[] temp = data[i].Split(',');
                cus[i].username = temp[0];
                cus[i].pass = temp[1];
                cus[i].creditNo = temp[2];
                cus[i].balance = temp[3];
            }
            bool flg = false;
            string name = UserNameTB.Text;
            string password = Box.Password;
            for (int i = 0; i < n; i++)
            {
                if (cus[i].login(name, password,cus[i]))
                {
                    MainWindow.customer_Name = name;
                    MainWindow.balance = Convert.ToInt32(cus[i].balance);
                    MainWindow.customer_Credit = cus[i].creditNo;
                    flg = true;
                    break;
                }
            }
            if (flg)
            {
                this.Hide();
                aftercustomerlogin obj = new aftercustomerlogin();
                obj.Show();
            }
            else
            {
                MessageBox.Show("Username or Password is incorrect ", "Error");
            }
           
        }
        private void UserNameTB_TextChanged(object sender, TextChangedEventArgs e)
        {

        }
        private void Sign_up(object sender, RoutedEventArgs e)
        {
            this.Hide();
            aftercustomersignup obj = new aftercustomersignup();
            obj.Show();
        }

        private void Back(object sender, RoutedEventArgs e)
        {
            this.Hide();
            MainWindow obj = new MainWindow();
            obj.Show();
        }
    }
}
