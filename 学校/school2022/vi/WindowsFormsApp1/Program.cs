using System;
using System.Drawing;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    static class Program
    {
        /// <summary>
        /// アプリケーションのメイン エントリ ポイントです。
        /// </summary>
        [STAThread]
        static void Main()
        {
            /*Form form = new Form();
            form.ClientSize = new Size(200, 100);

            Label label1 = new Label();
            Label label2 = new Label();
            Button button1 = new Button();
            Button button2 = new Button();

            label1.Text = "label1";
            label1.Location = new Point(10, 10);
            label1.AutoSize = true;

            label2.Text = "label2";
            label2.Location = new Point(10, 30);
            label2.AutoSize = true;


            form.Controls.AddRange(new Control[]
                {
                    label1,label2,button1,button2
            });

            Button button = new Button();
            button.Text = "OK";
            button.Location = new Point(10, 10);
            button.Size = new Size(120, 40);

            form.Controls.Add(button);//←ぼ表示させてる

            Application.Run(form);*/
            Application.Run(new Form1());

        }
        class Form1 : Form
        {
            public Form1()
            {
                this.Click += new EventHandler(From1_Click);
            }
        }
    }
}
