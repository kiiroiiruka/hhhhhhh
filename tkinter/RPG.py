import tkinter
F=("Times New Roman",20)
window=tkinter.Tk()#←ウィンドウを画面に表示して！
window.title("ゲーム")#←ウィンドウの上のスペースにゲームと表示して！
screen=tkinter.Canvas(width=700,height=490,bg="black")#ゲーム画面を表示して！
kyara1=tkinter.PhotoImage(file="kyara1.png")#使いたいキャラクター画像はこれ！
serihu=""
kaunnto=0
dannraku=1
nexttext=tkinter.Button(text="始める",bg="red")
def tugihe():
    global dannraku,kaunnto,serihu
    dannraku=2
    kaunnto=0
    serihu=""
class Serihu:
    def __init__(self,name,hatugenn):
        self.hatugenn=hatugenn
        self.name=name
        screen.after(40,self.main)
       
    def main(self):
        global serihu,kaunnto
        if kaunnto < 18*3:
            serihu+=self.hatugenn[kaunnto]
            kaunnto+=1
            if kaunnto%18==0:
                serihu+="\n"
        screen.delete("all")
        screen.create_image(600,300,image=kyara1)#kyara1というキャラクターを表示してくれ！
        screen.create_text(400,366,text="["+self.name+"]",font=F,fill="white")#そのスクリーンに文字を表示して！
        if kaunnto<18:
            screen.create_text(kaunnto*14+5,400,text=serihu,font=F,fill="white")#そのスクリーンに文字を表示して！
        else:
            screen.create_text(18*14+5,402+(kaunnto//18)*14,text=serihu,font=F,fill="white")#そのスクリーンに文字を表示して！
        screen.pack()
        screen.after(40,self.main)
        nexttext.place(x=30,y=30,width=100,height=50)
if dannraku==1:
    Serihu("花川 美琴","⎾ああああああああああああああああああああああああああああああああああああああああああああああああああああ⏌")
if dannraku==2:
    Serihu("花川 美琴","⎾いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい⏌")
nexttext.place(x=30,y=30,width=100,height=50)
nexttext = tkinter.Button(text="次の文章へ", command=tugihe)

window.mainloop()#←
