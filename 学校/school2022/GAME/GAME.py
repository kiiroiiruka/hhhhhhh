import pgzrun
from pgzero.actor import Actor
import random
import winsound

WIDTH = 700
HEIGHT= 490
TITLE='GAME'
sukoa = 0 #左上に表示されるスコアの値の変数
damtime= 0#ダメージ受けている間か、間じゃないか確認するやつ
dd = []#敵がランダムに出てくれるようにここから敵画像ここから引っ張って来る
gg = []#玉出すための入れ物
g=0 #g=60で割って1秒間に１回球が出てくれるようにしてくれる
kenn = Actor('daiya.png',topleft=(0,0))#kenn=プレイヤー
daiya2 = Actor('box.png',topleft=(0,0))#kenn=プレイヤー
dame = 3#←HP変数をdameにしHPを１０に
q=0
hai = Actor('iii.png',topleft=(1000,-500))#背景
a=0#ダメージで揺れる
b=0#ダメージで揺れるときの動き
c=1#スピード上げるための変数
d=1#
t=60#　T÷60の秒数ごとに敵が出現
def draw():
    
    global sukoa
    screen.fill((70,10,100))##画面の背景の色を調整
    hai.draw()
    if damtime > 0: 
        daiya2.y=kenn.y
        daiya2.x=kenn.x 
        daiya2.draw()
    else:
        kenn.draw()

    for i,obj in enumerate(dd):#enumerateでojjのFOR文を何個目に取り出したかの数字とセットで出力→「０；とら　１；かめ　２；犬」※iはなくても動く
        obj.draw()
    #    screen.draw.text(str(i),(obj.x,obj.y))#DDから何個目に取り出したかの数（i）の数を出てきた敵のそばに表示
        
    for i in gg:#ddに入れたTEKIの画像をiに入れる
        i.draw()
    if	dame>0:
        if dame==1:
            screen.draw.text("HP:"+str(dame),(300,0),owidth=1.5,color="RED",fontsize=40)
        else:
            screen.draw.text("HP:"+str(dame),(300,0),owidth=1.5,color="GREEN",fontsize=40)
        screen.draw.text("SCORE:"+str(sukoa),(0,0),owidth=1.5,color="YELLOW",fontsize=40)#←画像と画像が重なったときにプログラムで下に画像出力された画像が表示されるので、隠れないように下に書いてる
        #                              ↑
        #+strで””の中のSCOREの右に（　　　）内の値を表示してくれる

    if dame<1:
        screen.clear()
        screen.draw.text("GAME OVER!!!",(100,200),owidth=1.5,gcolor="BLUE",color="RED",fontsize=100)
        screen.draw.text("-------------------------------------------------------------------",(0,0),owidth=1.5,gcolor="BLUE",color="RED",fontsize=50)
        screen.draw.text("-------------------------------------------------------------------",(0,100),owidth=1.5,gcolor="BLUE",color="RED",fontsize=50)
        screen.draw.text("-------------------------------------------------------------------",(0,200),owidth=1.5,gcolor="BLUE",color="RED",fontsize=50)
        screen.draw.text("-------------------------------------------------------------------",(0,300),owidth=1.5,gcolor="BLUE",color="RED",fontsize=50)
        screen.draw.text("-------------------------------------------------------------------",(0,400),owidth=1.5,gcolor="BLUE",color="RED",fontsize=50)
        winsound.PlaySound('oto1.wav',winsound.SND_ASYNC)
    if sukoa >= 50:#スコアが50まで行ったらクリア
        if dame>0:
            screen.clear()
            screen.fill((30,30,100))##画面の背景の色を調整
            screen.draw.text("GAME CLEAR!!!",(100,200),owidth=1.5,color="YELLOW",fontsize=100)
            winsound.PlaySound('kuria.wav',winsound.SND_ASYNC)
def update():
    global g,sukoa,dame,q,a,b,c,d,t



    if dame>0 and sukoa<50:#ddにTEKIの画像入れて右の（）内の座標から表示させる
        if g % t == 0:     #   　↓　　 ↓ｘ座　　↓ｙ座
            dd.append(Actor('so.png',(WIDTH,random.randrange(HEIGHT))))
        g+= 1
        ##print(g)#←画面外にまだ敵がいるかを確認用、なくてもゲームは動く
        for ddd in dd:#ddに入っている玉がなくなる までF ORぶんが続く
            for ggg in gg:#←②
                if ddd.colliderect(ggg):#dddとgggのどれかがぶつかった時
                    dd.remove(ddd)#removeでぶつかったと玉を配列から消す、消すので画面から消える
                    gg.remove(ggg)
                    sukoa += 1
                    d     += 1
                    winsound.PlaySound('oto3.wav',winsound.SND_ASYNC)
                    break#IF起動したらブレイクが発動する仕組みで②のFOF文に入りなおす※

        global damtime
        for obj in dd:
            if kenn.colliderect(obj):#kennとobjがぶつかっているかいないか
                winsound.PlaySound('oto4.wav',winsound.SND_ASYNC)
                if damtime==0:#==0でてきにぶつかったときにダメージを受け中でない普通の状態のとき
                    dame -= 1                        
                    damtime = 60#←これだとダメージ中はダメージ受ける
                #damtime = 120#ダメージ中もダメージうけない
        if damtime > 0:
            damtime -=1
            a=a+1
            if a % 5==0:#ダメージ受けたときに揺れる処理
               b+=1
            if b%2==0:
                kenn.y-=3
            if b%2==1:
                kenn.y+=3
        if q != 0:
            q=q-1
        
        if keyboard.down:
            if kenn.y <470:
                kenn.y +=4
        if keyboard.up:
            if kenn.y >20:
                kenn.y -=4
        if keyboard.left:
            if kenn.x >50:
                kenn.x -=4
        if keyboard.right:
            if kenn.x <645:
                kenn.x +=4
        if d % 6 == 0:#もしスコアが5上がったら、敵の移動スピードを+2加速させる
            d=1
            c=c+1.5
        if sukoa==30:
            t=45
        for obj in gg:
            obj.x +=10

        for obj in dd:
            obj.x -=ｃ#敵のスピード
            if obj.x<0 :#OBJの中の敵が右から左に画面を通りすぎたか判断
                dd.remove(obj)#ラグらないように敵削除
               
        if hai.x>=-500:
            hai.x -=1.75
        if hai.x<-500:
            hai.x=1300
            
def on_key_down(key):
    global q
    if key == keys.SPACE:
        if q==0:#球を０．５秒感覚で連射制限をする
            gg.append(Actor('tama.png',(kenn.x+30,kenn.y)))
            winsound.PlaySound('oto1.wav',winsound.SND_ASYNC)
            q=30
            
        
   #dd.append(Actor('teki.png',(WIDTH,random.randrange(HEIGHT)))) #敵1
    


pgzrun.go()
