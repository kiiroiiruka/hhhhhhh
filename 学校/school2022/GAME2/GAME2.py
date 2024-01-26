import pgzrun
import random
import winsound

WIDHT =700
HEIGHT=490

a=Actor('k',topleft=(0,0))      #a=マップ
a1=2	                        #aの移動スピード
a2=4	                        #aの走る際の体力ゲージ
a3=61	                        #aの走る際の体力の変化の度合い(疲れ)
a4=1                            #aの走る際の体力の変化の度合い(回復)
a5=0	                        #ストッパー
a6=0	                        #ストッパー2
a7=0
#b=Actor('b',topleft=(0,0))     #b=敵キャラ
#b1=2	                        #bの移動スピード
c=Actor('a',topleft=(0,0))      #c=メインキャラ
c1=1	                        #ｃの持ち物画面絵の切り替え
d1=50	                        #d1=HP
e1=0	                        #e=時間
e2=0	                        #e1を６０で割る
f1=0	                        #f1=音
g=Actor('g',topleft=(0,600))	#ｇ＝スタート画面
g1=1
g2=0
h1=1	                        #h＝持ち物画
j=Actor('j',topleft=(150,0))    #j=ボタン画像
j2=Actor('j2',topleft=(150,0))  #ボタン画像(押したときの奴)
j1=0	                        #ボタンクリック時の大きさ
j3=0
j4=Actor('j4',topleft=(150,70))    
j5=Actor('j5',topleft=(150,140))  
i=Actor('i',topleft=(730,0))    #ホーム画面画像
l1=0	                        #壁にめり込むバグの対処
l2=1
l3=19
l4=0
l5=0
l6=0
l7=0
l8=0
l9=0
l=Actor('l',topleft=(0,0))    #l=壁#######################(呼び出し)


def draw():
    global a1,a3
    global c1
    global e1
    global j1#ボタン
    global l4#壁
    screen.clear()
    screen.fill((108,100,55))##画面の背景の色を調整
    a.draw()
    
    l.topleft=(a.x-100,a.y-193)###############################(場所指定)
    l.draw()#壁##################################(表示)
    screen.draw.text("home[a] rist[s]",(0,550),owidth=1.5,color="WHITE",fontsize=55)
    screen.draw.text("check[d]",(400,550),owidth=1.5,color="WHITE",fontsize=55)
    screen.draw.text("o",(700-(a.x/10),+50-(a.y/10)),owidth=1.5,color="GREEN",fontsize=30)
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
    screen.draw.text("seconds "+str(e2),(0,30),owidth=1,gcolor="LIGHT BLUE",color="GRAY",fontsize=35)
    c.x=400
    c.y=300
    c.draw()
    #リスト↓
    i.draw()
    if h1==2:
        j4.draw()
        j5.draw()
        if j1==0: 
            j.draw()
        if j1==1: 
            j2.draw()
    if h1!=2:
        screen.draw.text("ITEM",(735,0),owidth=1.5,color="WHITE",fontsize=30)
        screen.draw.text("[s]",(735,40),owidth=1.5,color="WHITE",fontsize=55)
    if h1==2:
        screen.draw.text("susumiguai",(500,10),owidth=1.5,color="WHITE",fontsize=40)
    g.draw()
    if g1==2:
        screen.draw.text("[save][stop][play]",(400,-10),owidth=1.5,color="WHITE",fontsize=50)
    #リスト↑
    if l1==1 and l4<1 and l5!=1:
         screen.draw.text("moguru[^][v]",(400,-10),owidth=1.5,color="WHITE",fontsize=50)
    if l3>1 and l.colliderect(c):
        l4+=1
        screen.draw.text("throw",(400,-10),owidth=1.5,color="WHITE",fontsize=50)
    if l5==1 and l4<1:
        screen.draw.text("can not throw",(400,-10),owidth=1.5,color="WHITE",fontsize=50)
    if d1==0:
        screen.clear()
        screen.draw.text("game over",(400,400),owidth=1.5,color="LIGHT BLUE",fontsize=100)
    


def update():
    global a1,a3,a2,a4,a5	#メインキャラ
    global c1	                #障害物
    global e1,e2	        #時間
    global f1	                #BGM
    global g1,g2	        #リスト画面①
    global h1                   #リスト画面②
    global j1,j3
    global l1,l2,l3,l4,l5,l6,l7	#壁バグ
    global l8,l9	#壁バグ
    global d1 
    #操作↓(メイン)
    if d1!=0:        
        if l2==0:
            l3+=1
            l7+=1
            if l7<2:
                l3=20
            if l3==20:
                l2=1
                l3=0
                if l4>0:
                    d1-=1
                #めり込むバグ
        if l2==1:
            if not l.colliderect(c):############################（当たり判定⓪）
                    l1=0########################
                    l4=0########################
                    l5=0########################
                    l7=0########################
            if keyboard.down:
                if a.y<600:
                    l8=a.y
                    a.y-=a1
                    a3+=1
                    if a3%60==0 and a2>0 and a1==4:
                        a2-=1        #キャラクターのスタミナ減らす
                        if keyboard.up:
                            a2+=1
                            a4+=1
                            a3=61
                            if a3==61:
                                if a4%81==0 and a2<4:  #疲れている状態から60/80秒間キーが押されてない状態だったら
                                    a2+=1	            #キャラクターのスタミナ回復
                if l.colliderect(c):#マップ内の障害物とぶつかったら    a.y+=a1########################（当たり判定①）
                    a.y+=a1########################
                    if l1==1:########################
                        a.y-=30########################
                    if a.y>l8:
                        a.y+=30
                    a.y+=a1########################
                    l2=0########################
                    l1=1########################
                    l5=1####################
                               
                   

            if keyboard.up:
                if a.y>0:
                    l9=a.y
                    a.y+=a1
                    a3+=1
                    if a3%60==0 and a2>0 and a1==4:
                        a2-=1        #キャラクターのスタミナ減らす
                        if keyboard.down:
                            a2+=1
                            a4+=1
                            a3=61
                            if a3==61:
                                if a4%81==0 and a2<4:  #疲れている状態から60/80秒間キーが押されてない状態だったら
                                    a2+=1	            #キャラクターのスタミナ回復
                if l.colliderect(c):#マップ内の障害物とぶつかったら    a.y-=a1########################（当たり判定②）
                    a.y-=a1########################
                    if l1==1:########################
                        a.y+=30########################
                    if a.y<l9:
                        a.y-=30
                    a.y-=a1########################
                    l2=0########################
                    l1=1########################
                    l5=1###################
             
                   
            if keyboard.left:
                if a.x>0:
                    a.x+=a1
                    a3+=1
                    if a3%60==0 and a2>0 and a1==4:
                        a2-=1        #キャラクターのスタミナ減らす
                        if keyboard.right:
                            a2+=1
                            a4+=1
                            a3=61
                            if a3==61:
                                if a4%81==0 and a2<4:  #疲れている状態から60/80秒間キーが押されてない状態だったら
                                    a2+=1	            #キャラクターのスタミナ回復
                if l.colliderect(c):#マップ内の障害物とぶつかったら   a.x-=a1########################（当たり判定③）
                    a.x-=a1########################
                    if l1==1:########################
                        a.x+=30########################
                    a.x-=a1########################
                    l2=0########################
                    l1=1########################
                    
            if keyboard.right:
                if a.x<800:   
                    a.x-=a1
                    a3+=1
                    if a3%60==0 and a2>0 and a1==4:
                        a2-=1       #キャラクターのスタミナ減らす
                        if keyboard.left:
                            a2+=1
                            a4+=1
                            a3=61
                            if a3==61:
                                if a4%81==0 and a2<4:  #疲れている状態から60/80秒間キーが押されてない状態だったら
                                    a2+=1	            #キャラクターのスタミナ回復
                if l.colliderect(c):#マップ内の障害物とぶつかったら      a.x+=a1########################（当たり判定④）
                    a.x+=a1########################
                    if l1==1:########################
                        a.x-=30########################
                    a.x+=a1########################
                    l2=0########################
                    l1=1########################
            
            if keyboard.space:
                a1=4
                if keyboard.up and keyboard.right:
                    a1=2
                if keyboard.down and keyboard.left:
                    a1=2
                if a5>1 and a2>0 and a1==4:
                    a2-=1
                    a5=0
            else:
                a1=2
                a4+=1
                a3=61
                a5+=1
                if a3==61:
                    if a4%81==0 and a2<4:  #疲れている状態から60/80秒間キーが押されてない状態だったら
                        a2+=1	            #キャラクターのスタミナ回復
                       
                 
            if a2==0:
                a1=1
            #操作↑
            if not a.colliderect(c):#マップ内からはみ出そうなら
                if keyboard.down:
                     a.y+=a1
                if keyboard.up:
                     a.y-=a1
                if keyboard.left:
                     a.x-=a1
                if keyboard.right:
                     a.x+=a1
            e1+=1
            if e1%60==0:
                e2+=1
            if f1==0:
                winsound.PlaySound('BGM.wav',winsound.SND_ASYNC)
                f1=1
                    
        #リスト系↓ 
            if keyboard.a and g1==1 and h1==1:
                g1=0

            if  g1==0:
                g2+=1
                g.y-=30
                if g2==20:
                    g1=2
                    g2=0
                    
            if keyboard.a and g1==2:
                g1=3

            if  g1==3 or g1==-1: 
                g1=-1
                g2+=1
                g.y+=30
                if g2==20:
                       g2=0
                       g1=1

            if keyboard.s and h1==1 and g1==1:
                h1=0

            if  h1==0:
                g2+=1
                i.x-=30
                if g2==20:
                    h1=2
                    g2=0
                    
            if keyboard.s and h1==2:
                h1=3

            if  h1==3 or h1==-1: 
                h1=-1
                g2+=1
                i.x+=30
                if g2==20:
                       g2=0
                       h1=1
        #リスト系↑
        #マウス系↓
            if j1==1:
                j3+=1
def on_mouse_down(pos):
    global h1,j1,j3#リスト画面②
    if h1==2:
        if j.collidepoint(pos):
            j1=1
            
            
        if j1==1 and j3>=10:
            if j2.collidepoint(pos):
               j1=0
               j3=0



    
pgzrun.go()
    
    
    
    

