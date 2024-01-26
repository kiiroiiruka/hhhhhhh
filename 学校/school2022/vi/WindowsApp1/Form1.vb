Public Class Form1

    Dim speed As Integer
    Private Sub Form1_KeyDown(sender As Object, e As KeyEventArgs) Handles PictureBox1.KeyDown
        If e.Shift = True Then
            speed = 30
        ElseIf e.Control = True Then
            speed = 2
        Else
            speed = 10
        End If
        If e.KeyCode = Keys.Right Then
            PictureBox1.Left += speed
        ElseIf e.KeyCode = Keys.Left Then
            PictureBox1.Left -= speed
        ElseIf e.KeyCode = Keys.Up Then
            PictureBox1.Left -= speed
        ElseIf e.KeyCode = Keys.Down Then
            PictureBox1.Top += speed
        End If
    End Sub

    Private Sub PictureBox1_Click(sender As Object, e As EventArgs) Handles PictureBox1.Click

    End Sub
End Class
