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
    /// Interaction logic for detail.xaml
    /// </summary>
    public partial class detail : Window
    {
        public detail()
        {
            
            InitializeComponent();
            string qt1 = Convert.ToString(MainWindow.qt1);
            textBlock.Text = MainWindow.pro1;
            textBlock1.Text = qt1;
            string price = Convert.ToString(MainWindow.price);
            textBlock2.Text = price;
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            MainWindow.qt2 = Convert.ToInt32(textBox.Text);
            if (MainWindow.qt2 > MainWindow.qt1)
            {
                MessageBox.Show("Your Quanity is Higher than The Total Quanity Of The Product");
            }
            else if (MainWindow.qt2 <= 0)
            {
                MessageBox.Show("Invalid Quantity");
            }
            else
            {
                this.Hide();
                creditdetail obj = new creditdetail();
                obj.Show();
            }
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            this.Hide();
            MenCategory obj = new MenCategory();
            obj.Show();
        }
    }
}
