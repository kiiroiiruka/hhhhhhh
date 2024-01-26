import tkinter
r=tkinter.Tk()
z=[0]
FNT=("Time New Roman",40)
cvs=tkinter.Canvas(width=300,height=200,bg="white")#スクリーンの大きさ表示
def m(e):
    cvs.delete("all")
    i="({},{})".format(e.x,e.y)
    cvs.create_text(300,200, text=i, font=FNT)
r.bind("<Motion>",m)
r.title("ウィンドウバーのタイトル")
cvs=tkinter.Canvas(width=500,height=200,bg="white")#スクリーンの大きさ表示

cvs.pack()#←テスト出る
r.mainloop()
