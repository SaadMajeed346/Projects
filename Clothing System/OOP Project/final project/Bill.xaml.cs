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
    /// Interaction logic for Bill.xaml
    /// </summary>
    public partial class Bill : Window
    {
        public Bill()
        {
            InitializeComponent();
            textBlock.Text = MainWindow.customer_Name;
            textBlock_Copy.Text = MainWindow.customer_Credit;
            textBlock_Copy1.Text = MainWindow.pro1;
            textBlock_Copy2.Text =Convert.ToString(MainWindow.qt2);
            textBlock_Copy3.Text = Convert.ToString(creditdetail.amount);
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            if (MainWindow.ct == 1)
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
                for (int i = 0; i < n; i++)
                {
                    if (MainWindow.customer_Name == cus[i].username)
                    {
                        int no = Convert.ToInt32(cus[i].balance);
                        no = no - creditdetail.amount;
                        cus[i].balance = Convert.ToString(no);
                        flg = true;
                        break;
                    }
                }
                int j = 0;
                for (int i = 0; i < n; i++)
                {

                    if (j == 0)
                    {
                        File.WriteAllText("TextFile1.txt", cus[i].username + ',' + cus[i].pass + ',' + cus[i].creditNo + ',' + cus[i].balance + '\n');
                        j++;
                    }
                    else
                    {
                        using (StreamWriter sw = File.AppendText("TextFile1.txt"))
                        {
                            sw.WriteLine(cus[i].username + ',' + cus[i].pass + ',' + cus[i].creditNo + ',' + cus[i].balance);
                        }
                    }
                }
                j = 0;
                for (int i = 0; i < MainWindow.counter1; i++)
                {
                    flg = false;
                    if (MainWindow.pro1 == MainWindow.product[i].productName)
                    {
                        int n1 = Convert.ToInt32(MainWindow.product[i].quantity);
                        n1 = n1 - MainWindow.qt2;
                        MainWindow.product[i].quantity = Convert.ToString(n1);
                        break;
                    }
                }
                for (int i = 0; i < MainWindow.counter1; i++)
                {

                    if (j == 0)
                    {
                        File.WriteAllText("Men.txt", MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price + '\n');
                        j++;
                    }
                    else
                    {
                        using (StreamWriter sw = File.AppendText("Men.txt"))
                        {
                            sw.WriteLine(MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price);
                        }
                    }

                }
                this.Hide();
                MenCategory obj = new MenCategory();
                obj.Show();
            }
            else if (MainWindow.ct == 2)
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
                for (int i = 0; i < n; i++)
                {
                    if (MainWindow.customer_Name == cus[i].username)
                    {
                        int no = Convert.ToInt32(cus[i].balance);
                        no = no - creditdetail.amount;
                        cus[i].balance = Convert.ToString(no);
                        flg = true;
                        break;
                    }
                }
                int j = 0;
                for (int i = 0; i < n; i++)
                {

                    if (j == 0)
                    {
                        File.WriteAllText("TextFile1.txt", cus[i].username + ',' + cus[i].pass + ',' + cus[i].creditNo + ',' + cus[i].balance + '\n');
                        j++;
                    }
                    else
                    {
                        using (StreamWriter sw = File.AppendText("TextFile1.txt"))
                        {
                            sw.WriteLine(cus[i].username + ',' + cus[i].pass + ',' + cus[i].creditNo + ',' + cus[i].balance);
                        }
                    }
                }
                j = 0;
                for (int i = MainWindow.counter1; i < MainWindow.counter1 + MainWindow.counter2; i++)
                {
                    flg = false;
                    if (MainWindow.pro1 == MainWindow.product[i].productName)
                    {
                        int n1 = Convert.ToInt32(MainWindow.product[i].quantity);
                        n1 = n1 - MainWindow.qt2;
                        MainWindow.product[i].quantity = Convert.ToString(n1);
                        break;
                    }
                }
                for (int i = MainWindow.counter1; i < MainWindow.counter1 + MainWindow.counter2; i++)
                {
                    if (j == 0)
                    {
                        File.WriteAllText("Women.txt", MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price + '\n');
                        j++;
                    }
                    else
                    {
                        using (StreamWriter sw = File.AppendText("Women.txt"))
                        {
                            sw.WriteLine(MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price);
                        }
                    }
                }
                j = 0;
                this.Hide();
                WomenCategory obj = new WomenCategory();
                obj.Show();
            }
            else if (MainWindow.ct == 3)
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
                for (int i = 0; i < n; i++)
                {
                    if (MainWindow.customer_Name == cus[i].username)
                    {
                        int no = Convert.ToInt32(cus[i].balance);
                        no = no - creditdetail.amount;
                        cus[i].balance = Convert.ToString(no);
                        flg = true;
                        break;
                    }
                }
                int j = 0;
                for (int i = 0; i < n; i++)
                {

                    if (j == 0)
                    {
                        File.WriteAllText("TextFile1.txt", cus[i].username + ',' + cus[i].pass + ',' + cus[i].creditNo + ',' + cus[i].balance + '\n');
                        j++;
                    }
                    else
                    {
                        using (StreamWriter sw = File.AppendText("TextFile1.txt"))
                        {
                            sw.WriteLine(cus[i].username + ',' + cus[i].pass + ',' + cus[i].creditNo + ',' + cus[i].balance);
                        }
                    }
                }
                j = 0;
                for (int i = MainWindow.counter1+MainWindow.counter2; i < MainWindow.counter1 + MainWindow.counter2+MainWindow.counter3; i++)
                {
                    flg = false;
                    if (MainWindow.pro1 == MainWindow.product[i].productName)
                    {
                        int n1 = Convert.ToInt32(MainWindow.product[i].quantity);
                        n1 = n1 - MainWindow.qt2;
                        MainWindow.product[i].quantity = Convert.ToString(n1);
                        break;
                    }
                }
                for (int i = MainWindow.counter1+MainWindow.counter2; i < MainWindow.counter1 + MainWindow.counter2+MainWindow.counter3; i++)
                {
                    if (j == 0)
                    {
                        File.WriteAllText("Children.txt", MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price + '\n');
                        j++;
                    }
                    else
                    {
                        using (StreamWriter sw = File.AppendText("Children.txt"))
                        {
                            sw.WriteLine(MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price);
                        }
                    }
                }
                j = 0;
                this.Hide();
                ChildrenCategory obj = new ChildrenCategory();
                obj.Show();
            }
                

            
        }
    }
}
