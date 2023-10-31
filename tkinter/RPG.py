import tkinter
F=("Times New Roman",20)
window=tkinter.Tk()#←ウィンドウを画面に表示して！
window.title("ゲーム")#←ウィンドウの上のスペースにゲームと表示して！
screen=tkinter.Canvas(width=700,height=490,bg="black")#ゲーム画面を表示して！
kyara1=tkinter.PhotoImage(file="kyara1.png")#使いたいキャラクター画像はこれ！
serihu=""
kaunnto=0
a="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
class Serihu:
    def __init__(self,na):
        self.na=na
        screen.after(40,self.serihu1)
    def serihu1(self):
        global serihu,kaunnto
        if kaunnto < 18*3:
            serihu+=self.na[kaunnto]
            kaunnto+=1
            if kaunnto%18==0:
                serihu+="\n"

        screen.delete("all")
        screen.create_image(600,300,image=kyara1)#kyara1というキャラクターを表示してくれ！
        if kaunnto<18:
            screen.create_text(kaunnto*14,400,text=serihu,font=F,fill="white")#そのスクリーンに文字を表示して！
        else:
            screen.create_text(18*14,400+(kaunnto//18)*14,text=serihu,font=F,fill="white")#そのスクリーンに文字を表示して！

        screen.pack()
        screen.after(40,self.serihu1)
syaberu1=Serihu("あああああああああああああああああああああああああああああああああああああああああああああああああ")
window.mainloop()#←
