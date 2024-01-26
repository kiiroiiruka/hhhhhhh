using System;
using System.Windows.Forms;
using System.Drawing;
class Program
{
    static void Main()
    {
        Form form = new Form();
        Label label = new Label();
        form.Text = "Hello";
        form.MaximizeBox = false;
        form.MaximizeBox = false;
        form.TopMost = true;
        form.BackColor = Color.FromArgb(0xFF, 0xCC, 0);//SystemColors.Window;
        form.ClientSize = new Size(200, 150);
        form.StartPosition = FormStartPosition.Manual;
        form.Location = new Point(100, 50);
        form.BackgroundImageLayout = ImageLayout.Center;
        form.BackgroundImageLayout = ImageLayout.Stretch;
        form.BackgroundImageLayout = ImageLayout.Zoom;
        Bitmap bitmap = new Bitmap("tile.png");
       // form.BackgroundImage = bitmap;
        //form.BackgroundImageLayout = ImageLayout.Tile;
        label.Location = new Point(50, 50);
        label.AutoSize = true;
        form.Controls.Add(label);
        Application.Run(form);


    }
}