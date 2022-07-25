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
    /// Interaction logic for MenCategory.xaml
    /// </summary>
    public partial class MenCategory : Window
    {
        public MenCategory()
        {
            InitializeComponent();
            MainWindow.ct = 1;
            TextBlock[] obj = new TextBlock[MainWindow.counter1*3];
            for(int i = 0; i < MainWindow.counter1*3; i++)
            {
                obj[i] = new TextBlock();
            }
            int a = -1;
            for (int i = 0, j = 0; i < MainWindow.counter1; i++)
            {

        
                Grid.SetColumn(obj[++a], j++);
                Grid.SetRow(obj[a], i);
                stock1.Children.Add(obj[a]);
                obj[a].Text = MainWindow.product[i].productName;
                Grid.SetColumn(obj[++a], j++);
                Grid.SetRow(obj[a], i);
                stock1.Children.Add(obj[a]);
                obj[a].Text  = MainWindow.product[i].quantity;

                Grid.SetColumn(obj[++a], j++);
                Grid.SetRow(obj[a], i);
                stock1.Children.Add(obj[a]);
                obj[a].Text = MainWindow.product[i].price;
                j = 0;
                //a++;
            }
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();
            aftercustomerlogin obj1 = new aftercustomerlogin();
            obj1.Show();
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[0].quantity;
            string pr= MainWindow.product[0].price;
            MainWindow.pro1 = MainWindow.product[0].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[1].quantity;
            string pr = MainWindow.product[1].price;
            MainWindow.pro1 = MainWindow.product[1].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy1_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[2].quantity;
            string pr = MainWindow.product[2].price;
            MainWindow.pro1 = MainWindow.product[2].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy2_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[3].quantity;
            string pr = MainWindow.product[3].price;
            MainWindow.pro1 = MainWindow.product[3].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy3_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[4].quantity;
            string pr = MainWindow.product[4].price;
            MainWindow.pro1 = MainWindow.product[4].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy4_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[5].quantity;
            string pr = MainWindow.product[5].price;
            MainWindow.pro1 = MainWindow.product[5].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }
    }
}
