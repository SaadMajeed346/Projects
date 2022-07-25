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
    /// Interaction logic for aftercustomersignup.xaml
    /// </summary>
    public partial class aftercustomersignup : Window
    {
        bool check;
        public aftercustomersignup()
        {
            InitializeComponent();
        }

        
        private void CheckBox_Checked(object sender, RoutedEventArgs e)
        {
            CheckBox obj = sender as CheckBox;
            if (obj.IsEnabled) { check = true; }
            else
                check = false;
        }
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (check)
            {

                customer obj1 = new customer();
                string name = text_box.Text + ',' + pass_box.Text + ',' + credit_box.Text + ',' + 50000;
                string path = "TextFile1.txt";
                if (text_box.Text == "" || pass_box.Text == "" || credit_box.Text == "" || ad.Text == "")
                {
                    MessageBox.Show("Fileds are Incomplete", "Error");
                }
                else
                {
                    obj1.add(name, path);
                    MainWindow.customer_Name = text_box.Text;
                    MainWindow.balance = 50000;
                    MainWindow.customer_Credit = credit_box.Text;
                    this.Hide();
                    aftercustomerlogin obj = new aftercustomerlogin();
                    obj.Show();
                }

            }
            else
            {
                if(text_box.Text == "" || pass_box.Text == "" || credit_box.Text == "")
                {
                    MessageBox.Show("Fileds Are Incomplete Or Tick The Checked Box", "Error");
                }
                else
                MessageBox.Show("Tick The Checked Box", "Error");
            }
        }

    }
}
