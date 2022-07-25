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
    /// Interaction logic for creditdetail.xaml
    /// </summary>
    public partial class creditdetail : Window
    {
        public static int amount = 0;
        public creditdetail()
        {
            InitializeComponent();
            amount = MainWindow.price* MainWindow.qt2;
            textBlock.Text =Convert.ToString(amount);
           
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();
            detail obj = new detail();
            obj.Show();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            if (MainWindow.balance < amount)
            {
                MessageBox.Show("Your Account Does Not Have Enough Money");
            }
           
            else if (textBox.Text == MainWindow.customer_Name && textBox_Copy.Text == MainWindow.customer_Credit)
            {
                MessageBox.Show("Successlly Buy");
                this.Hide();
                Bill obj = new Bill();
                obj.Show();
            }
            else
            {
                MessageBox.Show("You Entered Wrong Details");
            }
        }
    }
}
