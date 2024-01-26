import pgzrun
import random
import winsound


WIDHT =1000
HEIGHT=600
a=Actor('a',topleft=(0,0))      #a=メインキャラ
a1=2	                        #aの移動スピード
a2=4	                        #aの走る際の体力ゲージ
a3=61	                        #aの走る際の体力の変化の度合い(疲れ)
a4=1                            #aの走る際の体力の変化の度合い(回復)
a5=0	                        #ストッパー
a6=0	                        #ストッパー2
a7=0
#b=Actor('b',topleft=(0,0))     #b=敵キャラ
#b1=2	                        #bの移動スピード
c=Actor('c',topleft=(0,0))      #c=壁１
c1=1	                        #ｃの持ち物画面絵の切り替え
d1=5	                        #d1=HP
e1=0	                        #e=時間
e2=0	                        #e1を６０で割る
f1=0	                        #f1=音
def draw():
    global a1,a3
    global c1
    global e1
    screen.clear()
    screen.fill((108,100,55))##画面の背景の色を調整
    a.draw()
    if a2==4:
        screen.draw.text("--------",(180,-10),owidth=1.5,color="LIGHT BLUE",fontsize=50)
    if a2==3:
        screen.draw.text("------",(180,-10),owidth=1.5,color="LIGHT BLUE",fontsize=50)
    if a2==2:
        screen.draw.text("----",(180,-10),owidth=1.5,color="LIGHT BLUE",fontsize=50)
    if a2==1:
        screen.draw.text("--",(180,-10),owidth=1.5,color="YELLOW",fontsize=50)
    if a2==0:
        screen.draw.text("-",(180,-10),owidth=1.5,color="RED",fontsize=50)
    screen.draw.text("physical strength",(0,0),owidth=1.5,color="GREEN",fontsize=30)
    screen.draw.text("HP "+str(d1),(275,0),owidth=1.5,color="PINK",fontsize=35)
    screen.draw.text("seconds "+str(e2),(0,30),owidth=1.5,gcolor="LIGHT BLUE",color="GRAY",fontsize=35)
    c.x=400
    c.y=300
    c.draw()
def update():
    global a1,a3,a2,a4,a5,a6	#メインキャラ
    global c1	                #障害物
    global e1,e2	        #時間
    global f1	                #BGM
    
    #操作↓(メイン)
    if keyboard.down:
        if a.y<1000 :
            a.y+=a1
            a3+=1  
            if a3%60==0 and a2>0:
                a2-=1        #キャラクターのスタミナ減らす
    if keyboard.up:
        if a.y>0:
            a.y-=a1
            a3+=1
            if a3%60==0 and a2>0:
                a2-=1        #キャラクターのスタミナ減らす
    if keyboard.left:
        if a.x>0:
            a.x-=a1
            a3+=1
            if a3%60==0 and a2>0:
                a2-=1        #キャラクターのスタミナ減らす
    if keyboard.right:
        if a.x<800:   
            a.x+=a1
            a3+=1
            if a3%60==0 and a2>0:
                a2-=1       #キャラクターのスタミナ減らす            
    if keyboard.space:
        a1=4
        if  a5==0 and a2>0:
            a6+=1
            if a6==20:
                a2-=1
                a5=1
                a6=0
    else:
        a1=2
        a4+=1
        a3=61
        a5=0
        if a3==61:
            if a4%81==0 and a2<4:  #疲れている状態から60/80秒間キーが押されてない状態だったら
                a2+=1	            #キャラクターのスタミナ回復
                if keyboard.space:
                    a1=4
                    a2-=1
         
    if a2==0:
        a1=1
    #操作↑
    if a.colliderect(c):#aとcがぶつかっているかいないか
        if keyboard.down:
             a.y-=a1
        if keyboard.up:
             a.y+=a1
        if keyboard.left:
             a.x+=a1
        if keyboard.right:
             a.x-=a1
    e1+=1
    if e1%60==0:
        e2+=1
    if f1==0:
        winsound.PlaySound('BGM.wav',winsound.SND_ASYNC)
        f1=1
pgzrun.go()
    
    
    
    

