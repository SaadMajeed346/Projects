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

namespace final_project
{
    /// <summary>
    /// Interaction logic for WomenCategory.xaml
    /// </summary>
    public partial class WomenCategory : Window
    {
        public WomenCategory()
        {
            InitializeComponent();
            MainWindow.ct = 2;
            TextBlock[] obj = new TextBlock[MainWindow.counter2 * 3];
            for (int i = 0; i < MainWindow.counter2 * 3; i++)
            {
                obj[i] = new TextBlock();
            }
            int a = -1;int i1 = 0;
            for (int i = MainWindow.counter1, j = 0; i < MainWindow.counter1+MainWindow.counter2; i++)
            {


                Grid.SetColumn(obj[++a], j++);
                Grid.SetRow(obj[a], i1);
                stock1.Children.Add(obj[a]);
                obj[a].Text = MainWindow.product[i].productName;
                Grid.SetColumn(obj[++a], j++);
                Grid.SetRow(obj[a], i1);
                stock1.Children.Add(obj[a]);
                obj[a].Text = MainWindow.product[i].quantity;

                Grid.SetColumn(obj[++a], j++);
                Grid.SetRow(obj[a], i1);
                stock1.Children.Add(obj[a]);
                obj[a].Text = MainWindow.product[i].price;
                j = 0;
                i1++;
                //a++;
            }
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[6].quantity;
            string pr = MainWindow.product[6].price;
            MainWindow.pro1 = MainWindow.product[6].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[7].quantity;
            string pr = MainWindow.product[7].price;
            MainWindow.pro1 = MainWindow.product[7].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy1_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[8].quantity;
            string pr = MainWindow.product[8].price;
            MainWindow.pro1 = MainWindow.product[8].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy2_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[9].quantity;
            string pr = MainWindow.product[9].price;
            MainWindow.pro1 = MainWindow.product[9].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy3_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[10].quantity;
            string pr = MainWindow.product[10].price;
            MainWindow.pro1 = MainWindow.product[10].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();
            aftercustomerlogin obj = new aftercustomerlogin();
            obj.Show();
        }
    }
}
