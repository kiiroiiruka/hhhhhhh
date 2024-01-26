import tkinter
import random
r=tkinter.Tk()
r.title("ウィンドウバーのタイトル")
csv=tkinter.Canvas(width=700,height=200,bg="white")#スクリーンの大きさ表示
z=[0]
a=[0,1,0]
def btn():
     if a[2]==0: 
      a[2]=1
def btn1():
     if a[2]==0:       
      a[2]=2
def btn2():
     if a[2]==0: 
      a[2]=3
def btn3():
      a[0]=0
      a[1]=1
      a[2]=0
b=tkinter.Button(text="グー",bg="white",command=btn1)
d=tkinter.Button(text="チョキ",bg="white",command=btn)
f=tkinter.Button(text="パー",bg="white",command=btn2)
f1=tkinter.Button(text="リプレイ",bg="white",command=btn3)
tyoki=tkinter.PhotoImage(file="choki.png")
gu=tkinter.PhotoImage(file="guu.png")
pa=tkinter.PhotoImage(file="paa.png")
def ani():
    z[0]+=1#一秒ごとに実行されるプログラム
    csv.delete("all")#スクリーンクリアみたいなやつ
    r.after(75,ani)#ani関数を何秒ごとに実行させるか？
    b.place(x=300,y=100,width=100,height=40)
    d.place(x=430,y=100,width=100,height=40)
    f.place(x=560,y=100,width=100,height=40)
    if z[0]%2==0 and a[2]==0:
            a[0]=random.randrange(3)
    if a[0]==0:
            csv.create_image(150,100,image=tyoki)
    if a[0]==1:
            csv.create_image(150,100,image=gu)
    if a[0]==2:
            csv.create_image(150,100,image=pa)
    if a[2]!=0:
     f1.place(x=560,y=50,width=100,height=40)
     if a[0]==a[2]-1:
            csv.create_text(350,50,text=" あいこ",font=("Time New Roman",40))
     if a[0]!=a[2]-1:
          if (a[0]==1 and a[2]==1)or(a[0]==2 and a[2]==2)or(a[0]==0 and a[2]==3):
              csv.create_text(350,50,text="   あなたの負け",font=("Time New Roman",40))
          if (a[0]==1 and a[2]==3)or(a[0]==2 and a[2]==1)or(a[0]==0 and a[2]==2):
              csv.create_text(350,50,text="   あなたの勝ち",font=("Time New Roman",40))
ani()
csv.pack()
r.mainloop()
