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
    /// Interaction logic for aftercustomerlogin.xaml
    /// </summary>
    public partial class aftercustomerlogin : Window
    {
        public aftercustomerlogin()
        {
            if (MainWindow.n == 0)
            {
                int a = 0;
                MainWindow.data1 = File.ReadAllLines("Men.txt");
                foreach (string line in MainWindow.data1) { MainWindow.counter1++; };
                MainWindow.data2 = File.ReadAllLines("Women.txt");
                foreach (string line in MainWindow.data2) { MainWindow.counter2++; };
                MainWindow.data3 = File.ReadAllLines("Children.txt");
                foreach (string line in MainWindow.data3) { MainWindow.counter3++; };
                MainWindow.product = new Product[MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3];
                for (int i = 0; i < MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3; i++)
                {
                    MainWindow.product[i] = new Product();
                }
                for (int i = 0; i < MainWindow.counter1; i++)
                {
                    string[] temp = MainWindow.data1[i].Split(',');
                    MainWindow.product[i].productName = temp[0];
                    MainWindow.product[i].quantity = temp[1];
                    MainWindow.product[i].price = temp[2];
                }

                for (int i = MainWindow.counter1; i < MainWindow.counter1 + MainWindow.counter2; i++)
                {
                    string[] temp = MainWindow.data2[a].Split(',');
                    MainWindow.product[i].productName = temp[0];
                    MainWindow.product[i].quantity = temp[1];
                    MainWindow.product[i].price = temp[2];
                    a++;
                }
                a = 0;
                for (int i = MainWindow.counter1 + MainWindow.counter2; i < MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3; i++)
                {
                    string[] temp = MainWindow.data3[a].Split(',');
                    MainWindow.product[i].productName = temp[0];
                    MainWindow.product[i].quantity = temp[1];
                    MainWindow.product[i].price = temp[2];
                    a++;
                }
                a = 0;
                MainWindow.n++;
                
            }
            InitializeComponent();
        }

        private void log_out(object sender, RoutedEventArgs e)
        {
            MainWindow.counter1 = 0;
            MainWindow.counter2 = 0;
            MainWindow.counter3 = 0;
            MainWindow.n = 0;
            this.Hide();
            Customer obj = new Customer();
            obj.Show();
        }

        private void Men(object sender, RoutedEventArgs e)
        {
            this.Hide();
            MenCategory obj = new MenCategory();
            obj.Show();
        }

        private void Women(object sender, RoutedEventArgs e)
        {
            this.Hide();
            WomenCategory obj = new WomenCategory();
            obj.Show();
        }

        private void children(object sender, RoutedEventArgs e)
        {
            this.Hide();
            ChildrenCategory obj = new ChildrenCategory();
            obj.Show();
        }
    }
}
