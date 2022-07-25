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
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.IO;

namespace final_project
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public static bool check = false;
        public static int counter = 0;
        public static string[] data1;
        public static string[] data2;
        public static string[] data3;
        public static Product[] product;
        public static int n = 0;
        public static int counter1 = 0;
        public static int counter2 = 0;
        public static int counter3= 0;
        public static string pro1;
        public static int price = 0;
        public static int qt1 = 0;
        public static int qt2 = 0;
        public static int ct = 0;
        public static string customer_Name;
        public static string customer_Credit;
        public static int balance;
        
        public MainWindow()
        {
           
            InitializeComponent();
        }


        private void Employee(object sender, RoutedEventArgs e)
        {
            this.Hide();
            Employee obj = new Employee();
            obj.Show();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();
            Customer obj = new Customer();
            obj.Show();

        }
    }
}
