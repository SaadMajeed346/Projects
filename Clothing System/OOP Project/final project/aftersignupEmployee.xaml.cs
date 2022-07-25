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
    /// Interaction logic for Window1.xaml
    /// </summary>
    public partial class aftersignupEmployee : Window
    {
        bool check;
        public aftersignupEmployee()
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
                employee obj1 = new employee();
                string name = txt_box.Text + ',' + pass_box.Text;
                string path = "TextFile2.txt";
                if (txt_box.Text == "" || pass_box.Text == "" || ad.Text == "" || ci.Text == "" || ph.Text == "" || ex.Text == "")
                {
                    MessageBox.Show("Fileds are Incomplete", "Error");
                }
                else
                {
                    obj1.add(name, path);
                    MessageBox.Show("Employee Add Succesfully!", "Message");

                    this.Hide();
                    afterloginEmployee obj = new afterloginEmployee();
                    obj.Show();
                }
            }
            else
            {
                if (txt_box.Text == "" || pass_box.Text == "" || ad.Text == "" || ci.Text == "" || ph.Text == "" || ex.Text == "")
                {
                    MessageBox.Show("Fileds are Incomplete Or Tick The Check Box", "Error");
                }
                else
                {
                    MessageBox.Show("Tick The Checked Box", "Error");
                }
            }
        }
    }
}
