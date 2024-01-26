using System.Drawing.Drawing2D;
class Form1 : Form1
{
    public Form1()
    {
        this.BackColor = SystemColors.Window;
    }
    this.BackColor =SystemColors.Window;
}
protected override void OnPaint(PaintEventArgs e)
{
    Pen pen1 = new Pen(Color.Red, 2);
    Pen pen2 = new Pen(Color.Green, 2);
    Pen pen3 = new Pen(Color.Blue, 2);
    Rectangle rect = new Rectangle(20, 20, 200, 200);
    HatchBrush1 brush1 = new HatchBrush1(HatchStyle.Cross, Color.Blue, Color.Azure);
    SolidBrush brush2 = new SolidBrush(Color.Yellow);

    e.Graphics.FillRectangle(brush1, rect);
    e.Graphics.DrawRectangle(pen1, rect);
    e.Graphics.FillEllipse(brush1, rect);
    e.Graphics.DrawEllipse(pen2,20,20,200,200);
    e.Graphics.DrawLine(pen3, 20, 20, 220, 220);

    pen1.Dispose();
    pen2.Dispose();
    pen3.Dispose();
    brush1.Dispose();
    brush2.Dispose();

}