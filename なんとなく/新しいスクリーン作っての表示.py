#・新しくスクリーン作って何か表示したいとき
import tkinter
r=tkinter.Tk()
r.title("ウィンドウバーのタイトル")
csv=tkinter.Canvas(width=300,height=200,bg="white")#スクリーンの大きさ表示
csv.create_text(150,100,text="python",font=("Time New Roman",40))#time New Romanを（）でくくるとサイズ変えられなくできる？
csv.pack()
r.mainloop()
#tkinter内で何か画像を表示させたいときは画像ファイルをプログラムを保存したファイルと同じ階層（フォルダ）に置けばいい
#tkinterは1000で一秒
#csv.delete("all")←パイゲームゼロでいう、スクリーンクリア
#
