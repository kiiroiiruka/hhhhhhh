import tkinter
r=tkinter.Tk()
r.title("ウィンドウバーのタイトル")
csv=tkinter.Canvas(width=300,height=200,bg="white")#スクリーンの大きさ表示
z=[0]

def ani():
    z[0]+=1#一秒ごとに実行されるプログラム
    csv.delete("all")#スクリーンクリアみたいなやつ
    r.after(1000,ani)#ani関数を何秒ごとに実行させるか？
    if z[0]%2==0:
        csv.create_text(150,100,text="python",font=("Time New Roman",40))#time New Romanを（）でくくるとサイズ変えられなくできる？
    else:
        csv.create_text(150,100,text="pyt",font=("Time New Roman",40)) 
ani()
csv.pack()
r.mainloop()
#○○キーを押したらのif分内が動く記述→
