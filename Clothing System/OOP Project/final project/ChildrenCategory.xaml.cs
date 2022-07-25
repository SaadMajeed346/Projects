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
    /// Interaction logic for ChildrenCategory.xaml
    /// </summary>
    public partial class ChildrenCategory : Window
    {
        public ChildrenCategory()
        {
            InitializeComponent();
            MainWindow.ct = 3;
            TextBlock[] obj = new TextBlock[MainWindow.counter3 * 3];
            for (int i = 0; i < MainWindow.counter3 * 3; i++)
            {
                obj[i] = new TextBlock();
            }
            int a = -1; int i1 = 0;
            for (int i = MainWindow.counter1+MainWindow.counter2, j = 0; i < MainWindow.counter1 + MainWindow.counter2+MainWindow.counter3; i++)
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

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();
            aftercustomerlogin obj = new aftercustomerlogin();
            obj.Show();
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[11].quantity;
            string pr = MainWindow.product[11].price;
            MainWindow.pro1 = MainWindow.product[11].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[12].quantity;
            string pr = MainWindow.product[12].price;
            MainWindow.pro1 = MainWindow.product[12].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy1_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[13].quantity;
            string pr = MainWindow.product[13].price;
            MainWindow.pro1 = MainWindow.product[13].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button_Copy2_Click(object sender, RoutedEventArgs e)
        {
            string q = MainWindow.product[14].quantity;
            string pr = MainWindow.product[14].price;
            MainWindow.pro1 = MainWindow.product[14].productName;
            MainWindow.price = Int32.Parse(pr);
            MainWindow.qt1 = Int32.Parse(q);
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }
    }
}
