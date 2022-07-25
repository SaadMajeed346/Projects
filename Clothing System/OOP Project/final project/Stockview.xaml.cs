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
    /// Interaction logic for Stockview.xaml
    /// </summary>
    public partial class Stockview : Window
    {
        public static TextBox[] obj1;
        public static int n = 0;
        public static int n2 = 0;
        public Stockview()
        {
            
            InitializeComponent();
            
            obj1 = new TextBox[(MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3) * 3];
            n = (MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3) * 3;
            n2 = MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3;
            //int a = 0;
            if (MainWindow.check)
            {
                int no = 0; int n1 = 0;
                TextBlock[] obj = new TextBlock[(MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3) * 4];
                no = (MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3) * 4;
                for (int i = 0; i < no; i++)
                {
                    obj[i] = new TextBlock();
                }
                int a = -1;
                n1 = MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3;
                for (int i = 0, j = 0; i < n1; i++)
                {

                    Grid.SetColumn(obj[++a], j++);
                    Grid.SetRow(obj[a], i);
                    stock.Children.Add(obj[a]);
                    obj[a].Text = (i + 1).ToString();
                    Grid.SetColumn(obj[++a], j++);
                    Grid.SetRow(obj[a], i);
                    stock.Children.Add(obj[a]);
                    obj[a].Text = MainWindow.product[i].productName;
                    Grid.SetColumn(obj[++a], j++);
                    Grid.SetRow(obj[a], i);
                    stock.Children.Add(obj[a]);
                    obj[a].Text = MainWindow.product[i].quantity;

                    Grid.SetColumn(obj[++a], j++);
                    Grid.SetRow(obj[a], i);
                    stock.Children.Add(obj[a]);
                    obj[a].Text = MainWindow.product[i].price;
                    j = 0;
                    //a++;
                }
                // n = 0;
                //data = null;
                // a = 0;


            }
            else
            {

               
                for (int i = 0; i < n; i++)
                {
                    obj1[i] = new TextBox();
                }
                int a = -1;
                n2 = MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3;
                TextBlock[] obj2 = new TextBlock[n2];
                for (int i = 0; i < n2; i++)
                {
                    obj2[i] = new TextBlock();
                }
                for (int i = 0, j = 0; i < n2; i++)
                {

                    Grid.SetColumn(obj2[i], j++);
                    Grid.SetRow(obj2[i], i);
                    stock.Children.Add(obj2[i]);
                    obj2[i].Text = (i + 1).ToString();
                    Grid.SetColumn(obj1[++a], j++);
                    Grid.SetRow(obj1[a], i);
                    stock.Children.Add(obj1[a]);
                    obj1[a].Text = MainWindow.product[i].productName;
                    Grid.SetColumn(obj1[++a], j++);
                    Grid.SetRow(obj1[a], i);
                    stock.Children.Add(obj1[a]);
                    obj1[a].Text = MainWindow.product[i].quantity;

                    Grid.SetColumn(obj1[++a], j++);
                    Grid.SetRow(obj1[a], i);
                    stock.Children.Add(obj1[a]);
                    obj1[a].Text = MainWindow.product[i].price;
                    j = 0;
                    //a++;
                }

            }
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            if (!MainWindow.check)
            {
              int  a = -1;
                for (int i = 0; i < n2; i++)
                {
                    if (obj1[++a].Text != MainWindow.product[i].productName)
                    {
                        MainWindow.product[i].productName = obj1[a].Text;
                        MainWindow.counter++;
                    }
                    if (obj1[++a].Text != MainWindow.product[i].quantity)
                    {
                        MainWindow.product[i].quantity = obj1[a].Text;
                        MainWindow.counter++;
                    }
                    if (obj1[++a].Text != MainWindow.product[i].price)
                    {
                        MainWindow.product[i].price = obj1[a].Text;
                        MainWindow.counter++;
                    }
                }
                if (MainWindow.counter > 0)
                {
                    int j = 0;int i = 0;
                    for ( i=0 ; i < MainWindow.counter1; i++)
                    {
                        if (j == 0)
                        {
                            File.WriteAllText("Men.txt", MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price + '\n');
                            j++;
                        }
                        else
                        {
                            using(StreamWriter sw = File.AppendText("Men.txt"))
                            {
                                sw.WriteLine(MainWindow.product[i].productName + ',' + MainWindow.product[i].quantity + ',' + MainWindow.product[i].price);
                            }
                        }
                    }
                    j = 0;
                    int i1 = 0;
                    for (i1 = i; i1 < MainWindow.counter1+MainWindow.counter2; i1++)
                    {
                        if (j == 0)
                        {
                            File.WriteAllText("Women.txt", MainWindow.product[i1].productName + ',' + MainWindow.product[i1].quantity + ',' + MainWindow.product[i1].price + '\n');
                            j++;
                        }
                        else
                        {
                            using (StreamWriter sw = File.AppendText("Women.txt"))
                            {
                                sw.WriteLine(MainWindow.product[i1].productName + ',' + MainWindow.product[i1].quantity + ',' + MainWindow.product[i1].price);
                            }
                        }
                    }
                    j = 0;
                    int i2 = 0;
                    for (i2 = i1; i2 < MainWindow.counter1 + MainWindow.counter2+ MainWindow.counter3; i2++)
                    {
                        if (j == 0)
                        {
                            File.WriteAllText("Children.txt", MainWindow.product[i2].productName + ',' + MainWindow.product[i2].quantity + ',' + MainWindow.product[i2].price+'\n');
                            j++;
                        }
                        else
                        {
                            using (StreamWriter sw = File.AppendText("Children.txt"))
                            {
                                sw.WriteLine(MainWindow.product[i2].productName + ',' + MainWindow.product[i2].quantity + ',' + MainWindow.product[i2].price);
                            }
                        }
                    }
                    MessageBox.Show("Updated Successfully");
                }
                else
                    MessageBox.Show("Nothing Would Changed");
            }
            this.Hide();
            afterloginEmployee obj = new afterloginEmployee();
            obj.Show();
        }

        private void button_Click_1(object sender, RoutedEventArgs e)
        {
            if (!MainWindow.check)
            {
                int a = -1;
                for (int i = 0; i < n2; i++)
                {
                    if (obj1[++a].Text != MainWindow.product[i].productName)
                    {
                        MainWindow.product[i].productName = obj1[a].Text;
                        MainWindow.counter++;
                    }
                    if (obj1[++a].Text != MainWindow.product[i].quantity)
                    {
                        MainWindow.product[i].quantity = obj1[a].Text;
                        MainWindow.counter++;
                    }
                    if (obj1[++a].Text != MainWindow.product[i].price)
                    {
                        MainWindow.product[i].price = obj1[a].Text;
                        MainWindow.counter++;
                    }
                }
                if (MainWindow.counter > 0)
                {
                    int j = 0; int i = 0;
                    for (i = 0; i < MainWindow.counter1; i++)
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
                    j = 0;
                    int i1 = 0;
                    for (i1 = i; i1 < MainWindow.counter1 + MainWindow.counter2; i1++)
                    {
                        if (j == 0)
                        {
                            File.WriteAllText("Women.txt", MainWindow.product[i1].productName + ',' + MainWindow.product[i1].quantity + ',' + MainWindow.product[i1].price + '\n');
                            j++;
                        }
                        else
                        {
                            using (StreamWriter sw = File.AppendText("Women.txt"))
                            {
                                sw.WriteLine(MainWindow.product[i1].productName + ',' + MainWindow.product[i1].quantity + ',' + MainWindow.product[i1].price);
                            }
                        }
                    }
                    j = 0;
                    int i2 = 0;
                    for (i2 = i1; i2 < MainWindow.counter1 + MainWindow.counter2 + MainWindow.counter3; i2++)
                    {
                        if (j == 0)
                        {
                            File.WriteAllText("Children.txt", MainWindow.product[i2].productName + ',' + MainWindow.product[i2].quantity + ',' + MainWindow.product[i2].price + '\n');
                            j++;
                        }
                        else
                        {
                            using (StreamWriter sw = File.AppendText("Children.txt"))
                            {
                                sw.WriteLine(MainWindow.product[i2].productName + ',' + MainWindow.product[i2].quantity + ',' + MainWindow.product[i2].price);
                            }
                        }
                    }
                    MessageBox.Show("Updated Successfully");
                }
                else
                    MessageBox.Show("Nothing Would Changed");
            }
            this.Hide();
            afterloginEmployee obj = new afterloginEmployee();
            obj.Show();
        }
    }
}
