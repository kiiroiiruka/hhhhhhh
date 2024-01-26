def draw():#      
    global a1,a3,it
    global c1
    global e1
    global j1,j6,j7,j8#ボタン
    global l4#壁
    global n0,n1,n2,n3,n4,n5,n6#スクリーン表示テキスト
    global p1,p2,p4,p5,p6,p7,p8,p9,p10,p11,p12#持ち物
    global p1p,p2p,p3p,p4p,p5p,p6p,pp,p7p,p8p,p9p,p10p,p11p,p12p,p13p,p14p,p15p,p16p,p17p,p18p,p19p,p20p,p21p,p22p,p23p,p24p,p25p#アイテムゲットストッパー
    global p1pp,p2pp,p3pp,p4pp,p5pp,p6pp,p7pp,p8pp,p9pp,p10pp,p11pp,p12pp,p13pp,p14pp,p15pp,p16pp,p17pp,p18pp,p19pp,p20pp,p21pp,p22pp,p23pp,p24pp,p25pp#2回ゲットを防ぐストッパー
    global q1,q2#スタート画面
    global s1#ストーリー
    global m1,m2,m3,m4#マップ
    global tt322t,tt333t,tt344t,tt355t,t33t,t34t,t3t#暗証番号
    global t70,ooo
    global u3,u4,u5,u6
    global t55,papp
    global x1,x2,x3,x4,x5,x6,x7,x8,y1,y2,y3,y4,y5,y6,y7,y8,yy1,yy2,yy3,yy4,yy5,yy6,yy7,yy8,yy9,ccc,aru,aru2,z7z,yq
    global xx1,xx2
    global wq,we,www,s2,s3,se,k,iit,time,time2,time3,time4,mad1,mad2,g2,aaaa,d1,log,log2,aqs,p1ppp,p2ppp,p3ppp,p4ppp,p5ppp,p6ppp,p7ppp,p8ppp,p9ppp,p10ppp,p11ppp,p12ppp,p13ppp,p14ppp,p15ppp,p16ppp,p17ppp,p18ppp,p19ppp,p20ppp,p21ppp,p22ppp,p23ppp,p24ppp
        


#スタート画面
    if time2==0 and q1==0:#←どうゆう時に流れ始めるか
        winsound.PlaySound('A.wav',winsound.SND_ASYNC)
        time4=1.4+41#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and q1==0 and time4==1.4+41:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if q1==-1 and time4==1.4+41:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and q1==0 and time4==1.4+41:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0
#マップ外
    if time2==0 and m1==0 and q1==1:#←どうゆう時に流れ始めるか
        winsound.PlaySound('W2(2).wav',winsound.SND_ASYNC)
        time4=15#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and m1==0 and time4==15:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if m1!=0 and time4==15:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）+time4の値
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and time4==15:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0

        
#マップ①
    if time2==0 and m1==1:#←どうゆう時に流れ始めるか
        winsound.PlaySound('B.wav',winsound.SND_ASYNC)
        time4=5+84#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and m1==1 and time4==5+84:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if m1!=1 and time4==5+84:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）+time4の値
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and time4==5+84:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0
#マップ2階
    if time2==0 and m1==3:#←どうゆう時に流れ始めるか
        winsound.PlaySound('C(2).wav',winsound.SND_ASYNC)
        time4=5+64#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and m1==3 and time4==5+64:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if m1!=3 and time4==5+64:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）+time4の値
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and time4==5+64:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0
#マップ3階
    if time2==0 and m1==6:#←どうゆう時に流れ始めるか
        winsound.PlaySound('A.wav',winsound.SND_ASYNC)
        time4=5+41#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and m1==6 and time4==5+41:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if m1!=6 and time4==5+41:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）+time4の値
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and time4==5+41:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0
#マップ0階
    if time2==0 and m1==2:#←どうゆう時に流れ始めるか
        winsound.PlaySound('W3.wav',winsound.SND_ASYNC)
        time4=64#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and m1==2 and time4==64:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if m1!=2 and time4==64:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）+time4の値
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and time4==64:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0
#シューティングマップBGM
    if time2==0 and m1==5:#←どうゆう時に流れ始めるか
        winsound.PlaySound('W4.wav',winsound.SND_ASYNC)
        time4=81#←長さ（秒）
        time2=time4
    if time3!=time2*60 and time2!=0 and m1==5 and time4==81:#←どうゆう時にカウントを繰り返すのか
        time3+=1
    if m1!=5 and time4==81:#←何が起こったらBGMが止まるのか（どの値が変わったときにとまるか）+time4の値
        time2=0
        time3=0
        winsound.PlaySound('S.wav',winsound.SND_ASYNC)
    if time3==time2*60 and time4==81:#←長さ（秒）経ったら繰り返す
        time3=0
        time2=0

    if g2==19:#←これがある限り二回目はならない
        from pygame import mixer
        mixer.init()
        mixer.music.load("bb.wav")##8888888888888888888888888
        mixer.music.play(1)
        it=1

    screen.clear()
    screen.fill((0,0,0))##画面の背景の色を調整
    if q1<1:
        q.draw()
        #t.draw()
        qq.topleft=(300,160)
        qq.draw()
        edo.draw()
        screen.draw.text("ギャラリー",(0,30),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
        screen.draw.text("青透明の少女",(268.5,100),fontname='a.ttc',owidth=0.3,gcolor="BLACK",color="BLUE",fontsize=40)
        if q1==-1:
            q2+=1
            if q2==30:
                if n0!=3:
                    n0=3
                z7z=100
                q1=3#スタートボタン押したときの行き先　1→ゲーム　3→番最初
                q2=0
            qq1.topleft=(300,160)
            qq1.draw()
        screen.draw.text("START",(354,180),fontname='coure.fon',owidth=0.4,color="LIGHT BLUE",fontsize=1000)
        if q1==-3:############ギャラリー
            gara.draw()
            edo2.topright=gara.topright
            edo2.draw()
            sousa2.midright=gara.midright
            sousa2.draw()
            pppppppppppppppppppppp.midtop=sousa2.midbottom
            pppppppppppppppppppppp.draw()
            screen.draw.text("すでに見つけたITEM",(0,0),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=25)##ギャラリー
            if p2ppp!=1:
                screen.draw.text("①？？？？",(0,37*1),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)##ギャラリー
            if p2ppp==1:
                screen.draw.text("①クリスタル",(0,37*1),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)##ギャラリー
            if p1ppp!=1:
                screen.draw.text("②？？？？",(0,37*2),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)##ギャラリー
            if p1ppp==1:
                screen.draw.text("②ろうそく",(0,37*2),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)##ギャラリー
            if p3ppp!=1:
                screen.draw.text("③？？？？",(0,37*3),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)##ギャラリー
            if p3ppp==1:
                screen.draw.text("③ハンマー",(0,37*3),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)##ギャラリー↓
            if p4ppp!=1:
                screen.draw.text("④？？？？",(0,37*4),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p4ppp==1:
                screen.draw.text("④地下のカギ",(0,37*4),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p6ppp!=1:
                screen.draw.text("⑤？？？？",(0,37*5),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p6ppp==1:
                screen.draw.text("⑤青い星",(0,37*5),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p5ppp!=1:
                screen.draw.text("⑥？？？？",(0,37*6),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p5ppp==1:
                screen.draw.text("⑥2階のカギ",(0,37*6),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p7ppp!=1:
                screen.draw.text("⑦？？？？",(0,37*7),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p7ppp==1:
                screen.draw.text("⑦丈夫なわっか",(0,37*7),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p8ppp!=1:
                screen.draw.text("⑧？？？？",(0,37*8),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p8ppp==1:
                screen.draw.text("⑧ゴミ箱",(0,37*8),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p9ppp!=1:
                screen.draw.text("⑨？？？？",(0,37*9),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p9ppp==1:
                screen.draw.text("⑨バケツ",(0,37*9),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p10ppp!=1:
                screen.draw.text("⑩？？？？",(0,37*10),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p10ppp==1:
                screen.draw.text("⑩灯油入りバケツ",(0,37*10),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p11ppp!=1:
                screen.draw.text("⑪？？？？",(0,37*11),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p11ppp==1:
                screen.draw.text("⑪ロープ",(0,37*11),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p12ppp!=1:
                screen.draw.text("⑫？？？？",(0,37*12),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p12ppp==1:
                screen.draw.text("⑫ロープ付きバケツ",(0,37*12),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p13ppp!=1:
                screen.draw.text("⑬？？？？",(200,37*1),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p13ppp==1:
                screen.draw.text("⑬水入りバケツ",(200,37*1),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p14ppp!=1:
                screen.draw.text("⑭？？？？",(200,37*2),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p14ppp==1:
                screen.draw.text("⑭長方形のブロック",(200,37*2),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p15ppp!=1:
                screen.draw.text("⑮？？？？",(200,37*3),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p15ppp==1:
                screen.draw.text("⑮ポータブル電源",(200,37*3),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p16ppp!=1:
                screen.draw.text("⑯？？？？",(200,37*4),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p16ppp==1:
                screen.draw.text("⑯大きな二階のカギ",(200,37*4),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p19ppp!=1:
                screen.draw.text("⑰？？？？",(200,37*5),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p19ppp==1:
                screen.draw.text("⑰シャーペン",(200,37*5),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p18ppp!=1:
                screen.draw.text("⑱？？？？",(200,37*6),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p18ppp==1:
                screen.draw.text("⑱シャー芯",(200,37*6),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p20ppp!=1:
                screen.draw.text("⑲？？？？",(200,37*7),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p20ppp==1:
                screen.draw.text("⑲芯の入ったシャーペン",(200,37*7),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p21ppp!=1:
                screen.draw.text("⑳？？？？",(200,37*8),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p21ppp==1:
                screen.draw.text("⑳電池",(200,37*8),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p22ppp!=1:
                screen.draw.text("㉑？？？？",(200,37*9),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p22ppp==1:
                screen.draw.text("㉑紙",(200,37*9),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p23ppp!=1:
                screen.draw.text("㉒？？？？",(200,37*10),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p23ppp==1:
                screen.draw.text("㉒手紙",(200,37*10),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p24ppp!=1:
                screen.draw.text("㉓？？？？",(200,37*11),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
            if p24ppp==1:
                screen.draw.text("㉓3階のカギ",(200,37*11),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=18)
    if p10p>0:
        p10ppp=1
    if p15p>0:
        p15ppp=1
    if p21p>0:
        p21ppp=1
    if p9p>0:
        p9ppp=1
    if p11p>0:
        p11ppp=1
    if p12p>0:
        p12ppp=1
    if p13p>0:
        p13ppp=1
    if p20p>0:
        p20ppp=1
    if p23p>0:
        p23ppp=1




        
    #シーン↓
    if q1==3 and n3==5 and n4==0  and  n6==0:#
        n3=0                                                                                                                                                                        
        n5=2#　←その場所のテキストのアドレス　                                                                                        
        n4=3#　←そのテキストの段落数設定
        n6=1#　←テキスト表示する際は1にする
    #シーン↑
    if q1==1:
    #マップ出入り口↓
        if m1==0:#mmmmmmmmmmmmm
            m1m.draw()
            m11m.center=m1m.center
            
            m11m.draw()
     
            if log==0:
                rr1.topleft=(m1m.x-600,m1m.y-193)#マップ⓪の障害物
                rr1.draw()
            if log==1:
                rr1.topleft=(10000,100000)
            
            if m.colliderect(c) and keyboard.d and s1==1:#mmmmmmmmmmmmmmmmmmmm
                m1=1
                if s1==1 and n3==5 and n4==0  and  n6==0 and 0<s1<=2:#
                    n3=0                                                                                                                                                                        
                    n5=4#　←その場所のテキストのアドレス　                                                                                        
                    n4=3#　←そのテキストの段落数設定
                    n6=1#　←テキスト表示する際は1にする
                    s1=2      
            #l.topleft=(m1m.x-100,m1m.y-193)#マップ⓪の障害物
            #l.draw()#壁llllllllllllllllllllllllllllllllllllllll#マップ⓪の障害物
            m.bottomleft=m1m.bottomleft#マップ⓪の出口
            m.draw()
        #if m1==2:#mmmmmmmmmmmmm
        if m1==1:#mmmmmmmmmmmmm
            
            #m1=6#ttttttttttttttｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔｔ
            #d1=100
            a1a.center=a.center
            a1a.draw()
            a.draw()#m1のマップ
            k2.bottomleft=mm.bottomright
            k2.draw()
            k3.bottomright=mm.bottomleft
            k3.draw()
            kk1.bottomright=k2.topright
            kk1.draw()
            k4.midbottom=kk1.midtop
            k4.draw()
            kk2.midright=k3.midleft
            kk2.draw()
            k5.bottomright=kk1.bottomleft
            k5.draw()
            kk3.midleft=k4.midright
            kk3.draw()
            k6.midleft=kk3.midright
            k6.draw()
            kk4.midleft=k2.midright
            kk4.draw()
            k7.midleft=kk4.midright
            k7.draw()
            kk5.bottomleft=k7.topright
            kk5.draw()
            k8.topleft=kk5.topright
            k8.draw()
            k9.bottomright=kk5.midtop
            k9.draw()
            k10.midbottom=k6.midtop
            k10.draw()
            kk6.topleft=k6.topright
            kk6.draw()
            k11.topright=kk6.midbottom
            k11.draw()
            k12.bottomleft=k8.midright
            k12.draw()
            kk7.bottomleft=k9.topleft
            kk7.draw()
            k13.bottomleft=kk7.bottomright
            k13.draw()
            k14.bottomright=kk7.bottomleft
            k14.draw()
            kk8.topright=k14.midleft
            kk8.draw()

            kk9.topleft=k14.midright
            kk9.draw()
            k15.bottomleft=kk9.bottomright
            k15.draw()
            k16.topright=k15.topright
            #k16.draw()
            kk10.midright=k5.midleft
            kk10.draw()
            k17.topleft=kk10.midbottom
            k17.draw()
            kk11.topright=k17.bottomright
            kk11.draw()
            k18.midright=k11.midleft
            k18.draw()
            kk12.topright=kk10.bottomleft
            kk12.draw()
            k20.topright=kk12.topleft
            k20.draw()
            k21.bottomleft=kk12.topleft
            k21.draw()
            kk13.bottomleft=k21.topleft
            kk13.draw()
            k22.bottomright=kk13.bottomleft
            k22.draw()
            kk15.bottomleft=k22.topleft
            #kk15.draw()
            
            kk16.topleft=k22.midright
            kk16.draw()
            
            k23.topleft=kk16.topright
            k23.draw()
            kk17.midleft=k23.midright
            kk17.draw()
            kk18.topleft=kk17.bottomright
            kk18.draw()
            kk19.topleft=kk18.bottomright
            kk19.draw()
            kk20.bottomleft=k23.bottomright
            kk20.draw()
            kk21.bottomleft=kk20.topright
            kk21.draw()
            k24.bottomleft=kk18.topright
            k24.draw()
            kk23.bottomright=k24.topleft
            #kk23.draw()
            a1a.midright=a.midleft
            a2a.midbottom=a.midtop
            a3a.midleft=a.midright
            a4a.midtop=a.midbottom



            k2k.draw()
            
            a1a.draw()
            a2a.draw()
            a3a.draw()
            a4a.draw()

            k16.draw()
#家具↓
            #m1=3#ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
            
            k2k.bottomleft=k7.bottomright
            #k2k.draw()
            hhh7.topleft= k2k.topright
      #      hhh7.draw()
            
            k3k.topright=kk23.topleft
            k3k.draw()
            hhh1.topright=k3k.topleft
            #hhh1.draw()
            hh1.center=k3k.center
            #hh1.draw()
            hhhh1.topleft=k3k.topright
           # hhhh1.draw()
            
            k4k.topleft=kk6.midleft
            k4k.draw()
            hhh2.topleft= k4k.topright
            #hhh2.draw()
            hh2.center=k4k.center
            #hh2.draw()
            
            k5k.topright=k4.topleft
            k5k.draw()
            hhh3.topright=k5k.topleft
            #hhh3.draw()
           
            
            k6k.bottomleft=k17.midright
            k6k.draw()

            
            k7k.topright=k17.topleft
            k7k.draw()
            hhh4.topright= k7k.topleft
            #hhh4.draw()
            
            
            k8k.bottomleft=kk16.topleft
           # k8k.draw()
           # =k8k.topright
            k8k.draw()



            e4e4.topleft=k10.topright
            e4e4.draw()
            k9k.bottomleft=k10.bottomright
            k9k.draw()
            hhh5.topleft= k9k.topright
            #hhh5.draw()
            e2e2.bottomleft=k10.bottomright
            e2e2.draw()
            
            
            k10k.topleft=k12.topright
            k10k.draw()
            hhh6.topleft=k10k.topright
            #hhh6.draw()
            hh6.center=k10k.center
            #hh6.draw()
            
            
            k17k.bottomleft=k9.bottomright
            k17k.draw()
            hhh8.topleft= k17k.topright
            #hhh8.draw()

            k18k.bottomleft=k21.bottomright
            k18k.draw()
            hhh9.topleft=k21.topright
            #hhh9.draw()
            
            k11k.midright=k24.midleft
            k11k.draw()
            k11kk.midleft=k15.midright
            k11kk.draw()
            k11kkk.bottomright=kk4.topright
            k11kkk.draw()
            k11kkkk.bottomright=k5.bottomleft
            k11kkkk.draw()
            k8kk.bottomright=k24.bottomleft
            k8kk.draw()
            k8kkk.topright=k5.topleft
            k8kkk.draw()
            k8kkkk.bottomright=k8.bottomleft
            k8kkkk.draw()
            k12k.topleft=kk23.bottomleft
            k12k.draw()
            k12kk.bottomleft=kk18.topleft
            k12kk.draw()
            k12kkk.topright=kk7.bottomright
            k12kkk.draw()
            k12kkkk.topright=kk2.bottomright
            k12kkkk.draw()
            k13k.midleft=k15.topright
            k13k.draw()
            k13kk.midbottom=kk23.midtop
            k13kk.draw()
            k13kkk.bottomright=kk23.topright
            k13kkk.draw()
            k13kkkk.bottomright=kk15.midleft
            k13kkkk.draw()
            k14k.midleft=k24.midright
            k14k.draw()
            k14kk.midright=k10.midleft
            k14kk.draw()
            k14kkk.midtop=kk5.midtop
            k14kkk.draw()
            k14kkkk.bottomleft=k20.bottomright
            k14kkkk.draw()
            k15k.topright=k12.topleft
            k15k.draw()
            k15kk.topright=kk9.midtop
            k15kk.draw()
            k15kkk.topright=k10.topleft
            k15kkk.draw()
            k15kkkk.topleft=kk12.midtop
            k15kkkk.draw()
            kk24.topleft=k13kkkk.bottomright
            kk24.draw()
            k25.midbottom=k24.midtop
            k25.draw()
            if wq==1 and we==1:
                m1=3
                wq=0
                we=0
   

            
            #l.topleft=(a.x-100,a.y-193)#マップ⓪の障害物
            #l.draw()#壁llllllllllllllllllllllllllllllllllllllll#マップ⓪の障害物
            mm.topleft=a.midbottom#マップ⓪の出口
            mm.draw()
            v.midleft=a.midleft
            v.draw()
            doa.center=v.center
            
            
            #テキストが表示される障害物↓
            t4.topleft=(a.x+200,a.y-100)
            t4.draw()
            o.topleft=kk13.midbottom
            oo.topleft=kk13.midbottom
            tika.center=t4.center
            
            if p3p==2:
                oo.draw()
            if p1p==0:
                o.draw()
            t3.bottomleft=kk18.midright
            t3.draw()
            ki.center=t3.center
            if p6p==2:
                t7.topleft=a.center
                t7.draw()
                haha.center=t7.center

            v5.topleft=a.topleft#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            touyu.center=v5.center
            v6.bottomright=a.topright
            sutoubu.center=v6.center
            v7.bottomleft=a.bottomleft
            gomi.center=v7.center
            v9.midbottom=a.midtop
            dannro.center=v9.center
            v12.topleft=kk4.midbottom
            tvtv.center=v12.center
            v5.draw()
            v6.draw()
            v7.draw()
            if p14p==0:
                v9.draw()
            if p14p!=0:
                v9v.midbottom=a.midtop
                v9v.draw()
            v12.draw()



            
            t2.topleft=kk13.midbottom
            t2.draw()
            t1.topleft=(a.x+100,a.y+200)
            t1.draw()
            v2.midright=a.midright#################################################################################
            doa2.center=v2.center
            v2.draw()
            v3.bottomright=a.bottomright
            doa3.center=v3.center
            v3.draw()#44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            #テキストが表示される障害物↑
            if mm.colliderect(c) and keyboard.d and m4==120:#mmmmmmmmmmmmmmmmmmmm
                if s1!=3:
                    if n3==5 and n4==0  and  n6==0:#
                        n3=0                                                                                                                                                                        
                        n5=6#　←その場所のテキストのアドレス　                                                                                        
                        n4=1#　←そのテキストの段落数設定
                        n6=1#　←テキスト表示する際は1にする
                        m1=1
                m4=0    
                #建物から出られなくなる時の処理↓
                if s1==3:
                    m1=1
                    if m3==0:
                        m2=0
                        m3=1
            if m4!=120:
                m4+=1
            if m2!=120:
                m2+=1
                if m2==119:
                    s1=4#ssssssssssssss
                    if n3==5 and n4==0  and  n6==0:#
                        n3=0                                                                                                                                                                        
                        n5=5#　←その場所のテキストのアドレス　                                                                                        
                        n4=2#　←そのテキストの段落数設定
                        n6=1#　←テキスト表示する際は1にする
                        m1=1
                #建物から出られなくなる時の処理↑
            
         
                
                
        if m1==2:#mmmmmmmmmmmmm
   
            
            m33m.center=m3m.center
            m33m.draw()
            m3m.draw()
            wg1.midright=m3m.midleft
            wg2.midbottom=m3m.midtop
            wg3.midleft=m3m.midright
            wg4.midtop=m3m.midbottom
            mm.midtop=m3m.midtop#マップ⓪の出口
            mm.draw()
            t5.topright=m3m.topright
            t5.draw()
            kakera.topright=m3m.topright
            if log!=2:
                rr1.midleft=(m3m.x,m3m.y-100)#マップ⓪の障害物
                rr1.draw()
            if log==2:
                rr1.topleft=(10000,10000)
            v4.topleft=m3m.topleft#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            v8.center=m3m.center
            ido.center=v8.center
            v13.bottomleft=m3m.bottomleft
            if s1>8:
                mahou.center=v4.center
                v4.draw()
            v8.draw()
            if p15p==2 and p16p==0:
                v13.draw()
        if m1==3:#mmmmmmmmmmmmm#2階マップ
            #m44m.center=m4m.center
            #m44m.draw()
            m4m.draw()
            if t34t==0:
                 n3=0                                                                                                                                                                        
                 n5=99#　←その場所のテキストのアドレス　                                                                                        
                 n4=2#　←そのテキストの段落数設定
                 n6=1#　←テキスト表示する際は1にする
                 t34t=1
                
        


            zk2.bottomleft=midbottom.bottomright
            zk2.draw()
            zk3.bottomright=zk10.topleft
            zk3.draw()
            zkk1.bottomright=zk2.topright
            zkk1.draw()
            zk4.midbottom=zkk1.midtop
            zk4.draw()
            zkk2.midright=zk3.midleft
            zkk2.draw()
            zk5.bottomright=zkk1.bottomleft
            zk5.draw()
            zkk3.midleft=zk4.midright
            zkk3.draw()
            zk6.midleft=zkk3.midright
            zk6.draw()
            zkk4.midleft=zk2.midright
            zkk4.draw()
            zk7.midleft=zkk4.midright
            zk7.draw()
            zkk5.bottomleft=zk7.topright
            zkk5.draw()
            zk8.topleft=zkk5.topright
            zk8.draw()
            zk9.bottomright=zkk5.midtop
            zk9.draw()
            zk10.midbottom=zk6.midtop
            zk10.draw()
            zkk6.topleft=zk6.topright
            zkk6.draw()
            zk11.topright=zkk6.midbottom
            zk11.draw()
            zk12.bottomright=zkk11.bottomleft
            zk12.draw()
            zkk7.bottomleft=zk9.topleft
            zkk7.draw()
            zk13.bottomleft=zkk7.bottomright
            zk13.draw()
            zk14.bottomright=zkk7.bottomleft
            zk14.draw()
            zkk8.topright=zk14.midleft
            zkk8.draw()

            zkk9.topleft=zk14.midright
            zkk9.draw()
            zk15.bottomleft=zkk9.bottomright
            zk15.draw()
            zk16.topright=zk15.topright
            #k16.draw()
            zkk10.midright=zk5.midleft
            zkk10.draw()
            zk17.topleft=zkk10.midbottom
            zk17.draw()################
            zkk11.topright=zk17.bottomright
            zkk11.draw()
            zk18.midright=zk11.midleft
            zk18.draw()
            zkk12.topright=zk4.topright
            zkk12.draw()
            zk20.topright=zkk12.topleft
            zk20.draw()
            zk21.bottomleft=zkk12.topleft
            zk21.draw()
            zkk13.bottomleft=zk21.topleft
            zkk13.draw()
            zk22.bottomright=zkk13.bottomleft
            zk22.draw()
            zkk15.bottomleft=zk22.topleft

            ak1.topleft=zkk10.bottomleft
            ak1.draw()
            v4.topleft=zkk11.center
            v4.draw()
            ak3.midtop=zkk1.midtop
            ak3.draw()
            k80k.topleft=m4m.topleft
            k80k.draw()
            ak10.bottomleft=k80k.midright
            ak10.draw()
            zk1k.bottomleft=midleft.topleft
            zk1k.draw()
            #zk5k.bottomright=k21.bottomleft
            #zk5k.draw()
            zk1k.topright=zk10.topleft
            zk1k.draw()
            zk2k.midtop=zkk2.midbottom
            zk2k.draw()
            zk4k.bottomleft=zk21.bottomright
            zk4k.draw()
            zk3k.topleft=zk3.topright
            zk3k.draw()
            k2k.bottomleft=zk7.bottomright
            #k2k.draw()
            k3k.topright=zkk23.topleft
            k3k.draw()
            k4k.topleft=zkk6.midleft
            k4k.draw()
            k6k.topright=zk4.midleft
            k6k.draw()
            zk7k.midleft=zk7.midright
            zk7k.draw()
            teki2.center=zk7k.center#############青い障害物
            k8k.bottomright=zk9.midleft
            k8k.draw()
            zk3k.midleft=zk9.midright
            zk3k.draw()
            zk3k.bottomright=zk22.bottomleft
            zk3k.draw()
            ak11.bottomleft=midtop.bottomright
            ak11.draw()
            #zk5k.bttomleft=zk3.bottomright
            #zk5k.draw()
            ak5.midtop=zkk8.midtop
            ak5.draw()
            ak8.midtop=zkk5.center
            ak8.draw()
            ak12.midright=zk2.midleft
            ak12.draw()
            zk5kk.topleft=zk12.topright
            zk5kk.draw()
            teki1.center=zk5kk.center#############クマの障害物
            t7.midbottom=zkk7.midtop
            t7.draw()
            ak6.topright=zk6.topleft
            ak6.draw()
            v3.midlright=zk13.midleft
            v3.draw()
            ak7.bottomright=zk8.bottomleft
            ak7.draw()
           
            akaa.bottomleft=(m4m.x+800,m4m.y-600)
            akaa.draw()
            akab.topleft=(m4m.x-400,m4m.y-400)
            akab.draw()


            eee2.midright=m4m.midleft
            eee4.midleft=m4m.midright
            eee1.midbottom=m4m.midtop
            eee3.midtop=m4m.midbottom

            eee1.draw()
            eee2.draw()
            eee3.draw()
            eee4.draw()
        
            center.center=m4m.center#ゲーム機
            man.center=center.center
            midleft.midleft=m4m.midleft#短いシャー芯
            hidari.center=midleft.center
            midright.midright=m4m.midright#シャーペン
            migi.center=midright.center
            midbottom.midbottom=m4m.midbottom#金庫
            sita.center=midbottom.center
            midtop.midtop=m4m.midtop#引き出し
            ue.center=midtop.center
            bottomright.bottomright=m4m.bottomright#３F
            naname.center=bottomright.center
            topright.midright=m4m.topright#受話器
            kai3.center=topright.center
            ak9.midleft=m4m.topleft
            ak9.draw()
            
            center.draw()
            midleft.draw()
            midright.draw()
            midbottom.draw()
            midtop.draw()
            bottomright.draw()
            topright.draw()
            if log!=3:
                rr1.topleft=zkk4.midbottom#マップ⓪の障害物
            if log==3:
                rr1.topleft=(10000,10000)
            if k!=1:
                rr1.draw()
            

        if m1==6:#mmmmmmmmmmmmm
            u3=0
            f33f.center=f3f.center
            f33f.draw()
            f3f.draw()
            rr1.center=f3f.center
            rr1.draw()

            
    #マップ出入り口↑
        screen.draw.text("終了する[a]",(0,440),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=25)
        screen.draw.text("check[d]",(400,440),owidth=1.5,color="WHITE",fontsize=55)
        #screen.draw.text("o",(700-(a.x/10),+50-(a.y/10)),owidth=1.5,color="GREEN",fontsize=30)
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
        if d1>30:
            screen.draw.text("HP "+str(d1),(275,0),owidth=1.5,color="PINK",fontsize=35)
        if d1<=30:
            screen.draw.text("HP "+str(d1),(275,0),owidth=1.5,color="YELLOW",fontsize=35)
            if d1<=10:
                 screen.draw.text("HP "+str(d1),(275,0),owidth=1.5,color="RED",fontsize=35)
        screen.draw.text("PLAY TIME "+str(e2),(0,30),owidth=1,gcolor="LIGHT BLUE",color="GRAY",fontsize=35)
        screen.draw.text("(second)" ,(30,50),owidth=1,gcolor="LIGHT BLUE",color="GRAY",fontsize=30)
        c.x=400###########９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９９
        c.y=300
        if not  keyboard.down and not keyboard.up and not keyboard.left and not keyboard.right:
            aru=0
        if keyboard.space:
            aqs=7
            if a2==0:
                 aqs=30
                
        if not keyboard.space:
            aqs=15
            if a2==0:
                 aqs=30
        if aru2>aqs:#歩くアニメーションの速さ＝２０
            aru+=1
            aru2=0
            if aru==4:
                aru=0
        if ccc==0:
            if aru==0 or aru==2:
                c.draw()
                a22.x=400
                a22.y=300
                a222.x=400
                a222.y=300
            if aru==1:
                a22.draw()
            if aru==3:
                a222.draw()
        if ccc==2:
            c111.x=400
            c111.y=300
            a33.x=400
            a33.y=300
            a333.x=400
            a333.y=300
            if aru==0 or aru==2:
               c111.draw()
            if aru==1:
               a33.draw()
            if aru==3:
               a333.draw()
        if ccc==1:
            c2.x=400
            c2.y=300
            a44.x=400
            a44.y=300
            a444.x=400
            a444.y=300
            if aru==0 or aru==2:
               c2.draw()
            if aru==1:
               a44.draw()
            if aru==3:
               a444.draw()
        if ccc==3:
            c3.x=400
            c3.y=300
            a55.x=400
            a55.y=300
            a555.x=400
            a555.y=300
            if aru==0 or aru==2:
               c3.draw()
            if aru==1:
               a55.draw()
            if aru==3:
               a555.draw()              
        

           #リスト↓
        i.draw()
        if h1==2:
            j4.draw()
            j5.draw()
            jj44.draw()
            if j1==0: 
                j.draw()
            if j1==1: 
                j2.draw()
            screen.draw.text("ＭＡＰ＆進み具合",(156,j.y),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=16)
        if h1!=2:
            screen.draw.text("ITEM",(735,0),owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("[s]",(735,40),owidth=1.5,color="WHITE",fontsize=55)
            
        if h1==2:
            if j6==1:
                if papp!=0:
                    jj4.draw()
                if papp==0:   
                    j5.draw()

            if j6==1 and j7==0:#アイテム使用
                j7=12
                j8=45
            if j7!=0:
                j7-=1
                if j7==1:
                    j7=0
                    j6=0
            if j8!=0:
                j8-=1
                if pp>0:
                    pp-=1
                    if papp==0:
                        jj44.draw()
                        if it==0:
                            from pygame import mixer
                            mixer.init()
                            mixer.music.load("ba.wav")##8888888888888888888888888
                            mixer.music.play(1)
                            time=100
                            it=1
                        screen.draw.text("手持ちのitemは",(150,75),fontname='a.ttc',owidth=1,gcolor="GRAY",ocolor="BLACK",color="WHITE",fontsize=20)
                        screen.draw.text("使用できません",(150,100),fontname='a.ttc',owidth=1,gcolor="GRAY",ocolor="BLACK",color="WHITE",fontsize=20)
            if j6==0:
                j4.draw() 
            if papp!=0:
                        papp-=1
                        j4.draw()
                        from pygame import mixer
                        if it==0:
                            mixer.init()
                            mixer.music.load("ba.wav")##8888888888888888888888888
                            mixer.music.play(1)
                            time=100
                            it=1
                        screen.draw.text("手持ちのitemは",(150,75),fontname='a.ttc',owidth=1,gcolor="GRAY",ocolor="BLACK",color="WHITE",fontsize=20)
                        screen.draw.text("合成できません",(150,100),fontname='a.ttc',owidth=1,gcolor="GRAY",ocolor="BLACK",color="WHITE",fontsize=20)

           
            screen.draw.text("┌持ち物┐┌─目─標─┐",(300,10),fontname='a.ttc',owidth=1,gcolor="GRAY",ocolor="BLACK",color="WHITE",fontsize=40)
            screen.draw.text("└───┘└─────┘",(300,450),fontname='a.ttc',owidth=1,gcolor="GRAY",ocolor="BLACK",color="WHITE",fontsize=40)

            if p1p==1 and p6p==0:#p1pのアイテムを使用したら＋１させる、ー１するとまたアイテムが出現してしまう
                screen.draw.text(" ろうそく",(338,20+1*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p1p==1のアイテム
                p1ppp=1
            if p2p>=1:
                p2ppp=1
                screen.draw.text(" クリスタル",(338,20+2*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p2p==1のアイテム
            if p3p==1:
                p3ppp=1
                screen.draw.text(" ハンマー",(338,20+3*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p4p==1:
                p4ppp=1
                screen.draw.text(" 地下のカギ",(338,20+3*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p5p==1:
                p5ppp=1
                screen.draw.text(" 2階のカギ",(338,20+4*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p6p==1:
                p6ppp=1
                screen.draw.text(" 青い星",(338,20+1*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム

            if p7p==1:
                p7ppp=1
                screen.draw.text(" 丈夫なわっか",(338,20+5*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p8p==1:#丈夫なわっか＋ごみ箱合成→バケツ
                p8ppp=1
                screen.draw.text(" ゴミ箱",(338,20+6*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p9p==1:
                p9ppp=1
                screen.draw.text(" バケツ",(338,20+5*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p10p==1:#バケツもちながら右上に行く→灯油入りバケツ
                p10ppp=1
                screen.draw.text(" 灯油入りバケツ",(338,20+5*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p11p==1:#灯油入りバケツ持ちながらストーブに向かう→ロープ
                p11ppp=1
                screen.draw.text(" ロープ",(338,20+6*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p12p==1:#ロープ＋バケツ→ロープ付きバケツ
                p12ppp=1
                screen.draw.text(" ロープ付きバケツ",(338,20+5*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p13p==1:#ロープ付きバケツもって井戸→水入りバケツ
                p13ppp=1
                screen.draw.text(" 水入りバケツ",(338,20+5*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p14p==1:#水入りバケツもって井戸→長方形ブロック
                p14ppp=1
                screen.draw.text(" 長方形のブロック",(338,20+6*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p15p==1:#長方形ブロックもってセンターへ、
                p15ppp=1
                screen.draw.text(" ポータブル電源",(338,20+6*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p16p==1:#ポータブル電源もってテレビ→下から音がする→したいって2階のカギ
                p16ppp=1
                screen.draw.text(" 大きな2階のカギ",(338,20+6*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
          


            if p18p==1:#1アイテム１
                p18ppp=1
                screen.draw.text(" シャー芯",(338,20+7*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p19p==1:#1アイテム１
                p19ppp=1
                screen.draw.text(" シャーペン",(338,20+8*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p20p==1:#1アイテム１
                p20ppp=1
                screen.draw.text(" 芯の入ったシャーペン",(300,20+7*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=18)#p3p==1のアイテム
            if p21p==1:#1アイテム１
                p21ppp=1
                screen.draw.text(" 電池",(338,20+8*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム
            if p22p==1:#1アイテム１
                p22ppp=1
                screen.draw.text(" 紙",(338,20+9*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテ
            if p23p==1:#1アイテム１
                p23ppp=1
                screen.draw.text(" 手紙",(338,20+9*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテ
            if p24p==1:#1アイテム１
                p24ppp=1
                screen.draw.text(" 3階のカギ",(338,20+10*35),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=20)#p3p==1のアイテム


            

            #目標表示↓
            if s1==0:
                screen.draw.text("まだ場所も、時間もわか",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("らない..近くにだれかい",(500,20+2*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("ないか人を探してみよう",(500,20+3*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("物や人のそばでdボタン",(500,20+4*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("を押すと調べれる時が",(500,20+5*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("あるので気になるとこは",(500,20+6*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("dキーをおしてみよう",(500,20+7*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)


            if s1==1:
                screen.draw.text("このマップの左下に向か",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("うと建物の入り口がある",(500,20+2*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("謎の少女の言った建物に",(500,20+3*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("入ってみよう、帰り道は",(500,20+4*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("僕にはないのだから",(500,20+5*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==2:
                screen.draw.text("建物の中を回ってみよう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==3:
                screen.draw.text("建物の中を出よう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==4 or s1==5 or s1==6 or s1==7 :
                screen.draw.text("建物の中を探索しよう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==8:    
                screen.draw.text("謎の少女が落とした2階",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("鍵、彼女はいったいなぜ",(500,20+2*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("鍵を落としたのだろう？",(500,20+3*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("このカギを使って2階に",(500,20+4*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("上がってみよう、謎がふ",(500,20+5*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("えてきた",(500,20+6*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==9:
                screen.draw.text("もう一つカギを探そう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==10:
                screen.draw.text("2階に行こう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==11 and p24p==0:
                screen.draw.text("2階のを探索してみよう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("彼女はいったい",(500,20+2*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("何を考えてたのだろう",(500,20+3*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("2階は不思議なことに",(500,20+4*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("1階より物が少なく",(500,20+5*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("広々とした空間だ",(500,20+6*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
            if s1==12 or p24p==1:
                screen.draw.text("3階に行ってみよう",(500,20+1*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("あの子はおそらくこの",(500,20+2*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("上にいる。",(500,20+3*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("そろそろ何かが",(500,20+4*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("わかるかもしれない",(500,20+5*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
                screen.draw.text("先を進もう",(500,20+6*50),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)

            #目標表示↑
        
        g.draw()
        if g1==2:
             d2.draw()
             screen.draw.text("ゲームを終了する",(286.5,200),fontname='a.ttc',gcolor="RED",owidth=1,ocolor="BLACK",color="WHITE",fontsize=25)
             screen.draw.text("続ける[a]",(0,440),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=25)
    #リスト↑
        #if l1==1 and l4<1 and l5!=1:
             #screen.draw.text("moguru[^][v]",(400,-10),owidth=1.5,color="WHITE",fontsize=50)
        #if l3>1 and l.colliderect(c)or l3>1 and t1.colliderect(c):
        #    l4+=1
        #    screen.draw.text("throw",(400,-10),owidth=1.5,gcolor="WHITE",color="LIGHT BLUE",fontsize=50)
        if d1==0:
          se+=1
         
          m1m.y+=10000
          a.y+=10000
          m3m.y+=10000
          m4m.y+=10000
          f3f.y+=10000
          
          if se>10:
              screen.clear()
              d2.draw()
              screen.draw.text("スタート画面へ",(286.5,200),fontname='a.ttc',gcolor="RED",owidth=1,ocolor="BLACK",color="WHITE",fontsize=30)#←※まだスタート画面に戻る処理入れてない
              if k!=3 and k!=5 and k!=6:
                winsound.PlaySound('S.wav',winsound.SND_ASYNC)
                screen.draw.text("GAME OVER",(183,100),owidth=1.5,gcolor="RED",color="BLUE",fontsize=100)
              if k==5:
                screen.draw.text("このゲームのエンディングは　　NORMAL END と TRUE END　　の2種類があります",(0,0),fontname='a.ttc',owidth=1,ocolor="BLACK",color="WHITE",fontsize=20)           

                screen.draw.text("GAME CLEAR",(163,100),owidth=1.5,gcolor="YELLOW",color="BLUE",fontsize=100)
                screen.draw.text("NORMAL END",(320,400),owidth=1.5,gcolor="WHITE",color="BLUE",fontsize=100)
              if k==6:
                screen.draw.text("このゲームのエンディングは　　NORMAL END と TRUE END　　の2種類があります",(0,0),fontname='a.ttc',owidth=1,ocolor="BLACK",color="WHITE",fontsize=20)           

                screen.draw.text("GAME CLEAR",(163,100),owidth=1.5,gcolor="YELLOW",color="BLUE",fontsize=100)
                screen.draw.text("TRUE END",(350,400),owidth=1.5,gcolor="WHITE",color="BLUE",fontsize=100)
            
        #if l5==1 and l4<1:
         #   screen.draw.text("x x x",(400,-10),owidth=1,color="RED",fontsize=60)


    #テキスト表示↓
         #アイテム獲得表示↓zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        
        if p2>0 and n5==1 and p1pp>0:
            screen.draw.text("ろうそくを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p1p=1#アイテム手に入れた野を持ち物欄の部分に表示させる
            p1pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==3 and p2pp>0:
            screen.draw.text("クリスタルを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p2p=1
            p2pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==7 and p3pp>0:
            screen.draw.text("ハンマーを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p3p=1
            p3pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==8 and p4pp>0:
            screen.draw.text("地下のカギを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p4p=1
            p4pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==10 and p5pp>0:
            screen.draw.text("2階のカギを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p5p=1
            p5pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==13 and p6pp>0:
            screen.draw.text("青い星を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p6p=1
            p6pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==15 and p7pp>0:
            screen.draw.text("丈夫なわっかを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p7p=1
            p7pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1


        if p2>0 and n5==16 and p8pp>0:
            screen.draw.text("ゴミ箱を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p8p=1
            p8pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==17 and p9pp>0:
            screen.draw.text("バケツを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p9p=1
            p9pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==18 and p10pp>0:
            screen.draw.text("灯油入りバケツを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p10p=1
            p10pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==19 and p11pp>0:
            screen.draw.text("ロープを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p11p=1
            p11pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==20 and p12pp>0:
            screen.draw.text("ロープ付きバケツを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p12p=1
            p12pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==21 and p13pp>0:
            screen.draw.text("水入りバケツを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p13p=1
            p13pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==22 and p14pp>0:
            screen.draw.text("長方形のブロックを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p14p=1
            p14pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==23 and p15pp>0:
            screen.draw.text("ポータブル電源を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p15p=1
            p15pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==25 and p16pp>0:
            screen.draw.text("大きな2階のカギを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p16p=1
            p16pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1






        if p2>0 and n5==27 and p18pp>0:
            screen.draw.text("シャー芯を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p18p=1#アイテム手に入れた野を持ち物欄の部分に表示させる
            p18pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==28 and p19pp>0:
            screen.draw.text("シャープペンシルを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p19p=1
            p9pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==29 and p20pp>0:
            screen.draw.text("芯入りのシャープペンシルを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p20p=1
            p20pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==30 and p21pp>0:
            screen.draw.text("電池を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p21p=1
            p21pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==31 and p22pp>0:
            screen.draw.text("紙を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p22p=1
            p22pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==32 and p23pp>0:
            screen.draw.text("手紙を手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p23p=1
            p23pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
        if p2>0 and n5==34 and p24pp>0:
            screen.draw.text("3階のカギを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            p24p=1
            p24pp-=1
            p2-=1
            if it==0:
                from pygame import mixer
                mixer.init()
                mixer.music.load("db.wav")##8888888888888888888888888
                mixer.music.play(1)
                time=260
                it=1
       # if p2>0 and n5==36 and p25pp>0:
           # screen.draw.text("青いかぎを手に入れた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
           # p25p=1
           # p25pp-=1
           # p2-=1
           # if it==0:
           #     from pygame import mixer
           #     mixer.init()
            #    mixer.music.load("db.wav")##8888888888888888888888888
            #    mixer.music.play(1)
            #    time=260
           #     it=1

       #  if p2>0 and n5==14 and p7pp>0:
        #    screen.draw.text("　",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
        #    p7p=1#アイテム手に入れた野を持ち物欄の部分に表示させる
        #    p7pp-=1
         #   p2-=1
         #アイテム獲得表示↑
    if n3<5:
        nn.draw()#←文章が上に乗る
        if keyboard.d and n3==4 and n4==1 and yq==1:
            n3=5
            n4=0
            n6=0
            yq=0
            if log2==1:
                log+=1
                log2=0
                
            if m1==6:
                d1=0
            if p21p==1:
                p21p=2
                m1=5
                
                
            www=60
            #n5=0
            if q1==3:#ストーリー進行
                q1=1
            if p1==1:#アイテム獲得
                p2=120#アイテム獲得
                p1=0#←アイテム獲得モードから通常モードに
                p4+=1#手持ちのアイテム欄の何行目に表示するか
        if keyboard.d and n3==4 and n4>1:
            n3=0
            n4-=1
            n6+=1
            
            
    #テキスト↓
    if n5==1:
        if n6==1:
            screen.draw.text("おそらくここは古い建物なのだろう、床には1900年",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("と書かれた紙が置いてある、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("今にも穴が開きそうな床がそれを",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("語っている",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            screen.draw.text("どうやらこのかみは、昔ここに住んでいた人が書い",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("た日誌の切れ端のようだ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("どうやら７人家族で暮らしていたらしい",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("昔はこの地域にも沢山子供がいたらしい",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==3 and 1<s1<=3:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("だから建物がでかいのか、・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・ん？",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よくみたらその下に何かアイテムが落ちている",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=3
        if n6==4:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("じゃあそろそろここから出ようかな",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("とりあえず最初は入ってきたところに",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("向かおう",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==2:#始まりの文章
        if n6==1:
            sousa.draw()
           
        if n6==2:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("僕はいったい何を考えているのだろうか",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("不思議とさっきの記憶が思い出せない",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("だけど不思議とここに引き寄せられた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("感じがする、どういうことだろう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==3:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("周りを見渡すと、草原だ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("小鳥のさえずりが響いて落ち着いた場所だ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("いったい何が起こったのか？",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("不思議と頭を悩ました",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==3:#rr1と初めて出会う
        if n6==1:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("こんなところを一人で歩くなんてだいじょうぶ？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ずいぶん少子化の進んだこの町に",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あなたみたいな人がとおるなんて珍しい",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("いったいどこから来たの？",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("気になったから来てみただけだよ、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("まあ、遠くから来たかな",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ただここがいまいちよくわからないんだ",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==3:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("怖いもの知らずね",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よかったらこの中入ってみなよ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("もしかしたらあなたに何かを与えてくれるかも",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("しれない、あとこれも上げる",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==4:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("クリスタルなんだけどね、",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("これを使えばこの建物の壁をすり抜けることが",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("できるの、じゃあ私はここでいったんさよならね",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("もしかしたらまた会うかもね",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=1#ストーリーの進み具合
            log2=1
    if n5==4:#建物の中入る
        if n6==1:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ここで合ってるみたいだ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("さっきもらったクリスタルがある",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("使ってみよう、今更どうなってもいいし",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("じゃあ歩こう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            ccc=0
        if n6==2:
            screen.draw.text("基本的に壁や物に向かって",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ぶつかりに行くと",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("その壁を",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("すり抜けることができます",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==3:
            screen.draw.text("注意!!壁をすり抜けるごとに右上のHPが減っていきます",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("（※ドアや出入口,人などの場合は減りません）",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("（※1部すり抜けられない家具なども存在します）",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("0になるとゲームオーバーです,気をつけて進めましょう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=2#ストーリーの進み具合
    if n5==5:
        if n6==1:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("あれ？おかしいな、さっきここ通れたはずだよな？なんで",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("だ？ドアがしまって外に出られない",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("困ったな",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("しょうがないな、どうせならこの建物をもう少し",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("探索してみよう、",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("何かあるかもしれないし",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==6:
        if n6==1:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("今は建物の中を探索してみよう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==7:#金庫開ける
        if n6==1:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("きんこから、ハンマーが出てきた",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ひびが入ったり、こわれをれかけのところは",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("これで割れるかもしれない",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("この調子で探索してみよう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==8:
        if n6==1:
            screen.draw.text("ハンマーを使用して床をたたいた",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("すると床に見事に穴が開いた、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あれ？たたいた衝撃手でハンマーが壊れた",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ん？穴の中に鍵がある、もっておこう",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=6
    if n5==9:
        if n6==1:
            screen.draw.text("さっき拾ったカギが使用して",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("扉を開けた、どうやら地下に続いてるようだ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            
            s1=7
    if n5==10:#rr1と初めて出会う
        if n6==1:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("すごいびっくりしたよ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("まさかこんなところまで来るなんて",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ますますあなたが不思議に思えてきたわ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なんでこんなところに来たの？",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・・・・わからないんだ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ただおもい事象があってここに来た気がするんだ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("けど、不思議とそれを覚えていないんだ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ここがどこかもはっきりわかっていない",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==3:
            poo.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("なるほどね、おもしろい",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("不思議なこともあるもんね",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ただあなたにみおぼえがあるのは気のせいかしら",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なにかかんけいしてるのかもね",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==4:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("にしても、僕からも聞きたいんだが、君はなぜ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("こんなところにいるんだ？",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("もっといいい居場所だって沢山ほかにあるだろ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("うに",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==5:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・あなたも同じなんだ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なんかうれしい、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("私はまたここで消えるね、多分またどこかで",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あえるかな？・・・じゃあね",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==6:
            r1.draw()#キャラクター
            log=2
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("？？？？？？？？？・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なんか懐かしいな、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ん？消える際になにかをおとしたようだ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なんだろう？",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=8
            p1=1
    if n5==11:
        if n6==1:
            screen.draw.text("ここが二2階につながる通路のようだ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("鍵を使ってみよう、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            screen.draw.text("・・・あれ？よく見たらこの扉2重ロック",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("になっているな、・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・ダメだ開かない",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("もう一つカギを探そう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=9
    if n5==12:
        if n6==1:
            screen.draw.text("いったい何の家具だろう？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よく見ると、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("青＝7と書いてある・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("どういう意味だろう？・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==13:
        if n6==1:
            screen.draw.text("いったい何の家具だろう？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よく見ると、裏に光のない",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("誕生日ケーキの絵が",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("描かれている",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2 and p2p==2:
            screen.draw.text("・・・・・・・・・！！！！！！！",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("手持ちのろうそくが反応した",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ろうそくは消えて、驚くことに",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("中から青いかけらが出てきた",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==14:
        if n6==1:
            screen.draw.text("手持ちにあった青い星が",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ちょうどはまった",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:
            screen.draw.text("・・・・・・・・・！！！！！！！",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("上から何か音がした",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            ooo=1
    if n5==15:
        if n6==1:
            screen.draw.text("不思議な机、魔法人のような",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("物が描かれている",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("とてもきれいで",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よくみると下に何か落ちている",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==16:#
        if n6==1:
            screen.draw.text("ゴミ箱がある",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==17:
        if n6==1:
            screen.draw.text("丈夫なわっかとゴミ箱を",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("合成して、バケツに",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("することができた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==18:#バケツもって右上
        if n6==1:
            screen.draw.text("何かが入っている",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ちょうどバケツがある",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("くんでみよう",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==19:#灯油入りバケツもってストーブ
        if n6==1:
            screen.draw.text("ストーブに灯油を入れた",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ん？ストーブが動いて",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ロープが落ちてきたてきた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==20:#ロープもってバケツ合成してロープ付きバケツ
        if n6==1:
            screen.draw.text("バケツの持ち手の部分に",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ロープを結んでくっつけた、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ロープ付きのバケツが完成した",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==21:#ロープ付きバケツもって井戸に
        if n6==1:
            screen.draw.text("どうやらこれは小さな井戸のようだ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("手持ちのロープ付きバケツ使って",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("水を汲んだ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==22:#水入りバケツもって暖炉に
        if n6==1:
            screen.draw.text("水入りバケツを使って暖炉の火を消した",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("消したところから長方形のブロックが",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("出てきた・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==23:#長方形のブロックをもってセンターに
        if n6==1:
            screen.draw.text("四角いくぼみにブロックがはまり",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("中から大きな物が出てきた",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("これはどうやらポータブル電源",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("のようだ・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

    if n5==24:#長方形のブロックをもってセンターに
        if n6==1:
            screen.draw.text("ポータブル電源を使ってテレビに",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("電気を送り、テレビをつけた",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・！！！",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("下から何か音がした",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==25:#てれびつけて下に
        if n6==1:
            screen.draw.text("二回のカギをみつけた",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("これで2階に上がれそうだ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("もう一度あそこに行ってみよう",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            #s1+=1
    if n5==26:#
        if n6==1:
            screen.draw.text("二つのカギを使った、",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("どうやら今度はしっかりあいた",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("そうだ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            s1=10
#↓2階
    if n5==27:
        if n6==1:
            screen.draw.text("シャー芯",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("がはいってる",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("シャー芯を取ってみた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==28:#バケツもって右上
        if n6==1:
            screen.draw.text("シャープペンシルを",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("手に入れた",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==29:#灯油入りバケツもってストーブ
        if n6==1:
            screen.draw.text("シャーペンに芯を入れ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("新入りのシャーペンにした",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ちゃんと使えそうだ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("どこかから鍵が開く音がした",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==30:#ロープもってバケツ合成してロープ付きバケツ
        if n6==1:
            screen.draw.text("さっきしまっていた金庫が開いている",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("金庫から電池を取り出した",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・またどこかから",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("鍵の開く音がした",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==33:#長方形のブロックをもってセンターに
        if n6==1:
            screen.draw.text("電池をいれたら機会が動いた・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("どうやらゲームができるそうだ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text(" どうやら,このゲームは",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("シューティングゲームのようだ",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==31:#ロープ付きバケツもって井戸に
        if n6==1:
            screen.draw.text("さっきしまっていた引き出しが開いている",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("引き出しから紙を取り出した",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==32:#水入りバケツもって暖炉に
        if n6==1:
            screen.draw.text("紙にシャープペンシルを使って",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("文章を書いた。",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

    if n5==34:#長方形のブロックをもってセンターに
        if n6==1:
            screen.draw.text("電話をした",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("そしたら、3階のカギが",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("下から出てきた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("3階に行こう",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

    if n5==35:#rr1
        if n6==1:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("やっぱあなたは変わり者ね",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("きっとくるとおもってたわ",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("会えてうれしいよ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ここ誰もいないし",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("君はこの館に住んでいるのか？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("今のところ君以外の人も見てないし",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("この建物の部屋も結構知ってるみたいだし",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==3:
            poo.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==4:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("どうしたんだ？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("急に黙り込んで",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==5:
            poo.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ごめんね、ちょっと苦い思い出",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("思い出しちゃった、気にしないで",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("そこらへんはあまり触れないで",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==6:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("？？？？？？？？？・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("うん、わかった、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・？・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==7:
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ありがとね・・・・・、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・ごめん",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・じゃあね・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            log2=1
            k=1
  
    if n5==36:#rr1と最後会う
        if n6==1:
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ごめんね、ごめんね",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ありがとう",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("会えてうれしいよ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("さよなら",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

    if n5==37:#rr1と初めて出会う
        if n6==1:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ごめんね、ごめんね",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ありがとう",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("会えてうれしいよ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("さよなら",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:#20個
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==3:#20個
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==4:#20個
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あの・・かすかではあるん",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("だけど、僕思い出したんだ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==5:#20個
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("？？？？？？？？・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==6:#20個
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("これあげるよ・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ちょっと字が雑でごめんね",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==7:#20個
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("彼女に",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("持っていた",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("手紙を渡した",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==8:#20個
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==9:#20個
            r2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)            
        if n6==10:#20個
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("にしても大丈夫？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("僕の記憶だと君はたしか",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("仲のいい友達だった",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("気がするんだ、",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==11:#20個
            r1500.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("なんか勘違いしていたら",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ごめんね",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("この世界に来てから",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よくわからなくて",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==12:#20個
            poo2.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あーーー、なんでだろう",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("すっごいうれしいよ・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)  
        if n6==13:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("あの事故があったのに",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ここにきても、こんなに",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("覚えてくれてるなんて",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)                   
        if n6==14:#20個
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("事故？・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("覚えてくれてるなんて",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・あ・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)                   
        if n6==15:#20個
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("そうだった、思い出した",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("僕、交通事故で",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("死んじゃったんだ",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)                   
        if n6==16:#20個
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("この子を助けようとして",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("結局助けることができず",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("自分も、トラックに",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("引かれてしまったんだ",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)                   
        if n6==17:#20個
            r1500.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("そうだ、",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("生きてるとき君を",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("助けることが",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("できなかった、ごめん",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)                   
        if n6==18:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("思い出しちゃったかな",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("私のせいだよ、ごめんね",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)      


          
        if n6==19:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("私もよくわからないの",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("この世界のことは",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・ただ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あのなくなった日から",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==20:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("たまたま見つけたこの館に",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ひとりで暮らしてるの",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==21:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ごめんね、この館",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("から出られなくさせたのは",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("私のせいだよ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ごめんなさい・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==22:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("しばらくの間ずっと",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("一人だったから",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("あなたが草原に来た時思わず",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("この館に誘ってしまったよ",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==23:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("だけど、こんなに思い出して",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("くれたと思うと、嬉しいなって思っちゃうし",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よくわからないけど泣きそうになっちゃうの",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==24:#20個
            r5y.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ごめんなさい、",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ほんとにごめんなさい",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("全て私のせいです",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ごめんなさい",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==25:#20個
            r1500.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==26:#20個
            r1500.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("なるほど、そっか",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("そんなに自分を攻めなくても",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("大丈夫だよ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==27:#20個
            r1500.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("多分僕は、君の何かを感じ取って",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ここまで来たのかもしれない",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("大丈夫だよ、安心して",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("僕怒ってないから",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)


        if n6==28:#20個
            r1501.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("でもこうやって出会えたなら",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("よかったんじゃないかな",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("君も多少は寂しさから",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("解放されると思うし",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==29:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("でも,もうあなたは",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ここに入れないの",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
          
        if n6==30:#20個
            r1500.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("え・・なんで？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("僕がここから離れたり",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("出ていかなければ",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("大丈夫じゃないの？",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==31:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("完璧に死んだら",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("生きていた時の記憶は",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("私みたいに整理されるんだけど",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==32:#20個
            poo1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("あなたみたいに、きおくがあやふや",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("だった場合は、前世に戻り始めてる",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("証拠なの、・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==33:#20個
            r4y.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("多分あなたは、治療がうまくいって",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("るんだと思うわ、その様子はもうすぐ息を",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("返すんだと思う",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==34:#20個
            sikai.center=f3f.center
            sikai.draw()
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("あれ、視界が歪んできた",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==35:#20個
            sikai.center=f3f.center
            sikai.draw()
            r4y.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("多分そろそろお別れかな",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ほんとに少しの間だったけど",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("すごい嬉しかったよ",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==36:#20個
            sikai.center=f3f.center
            sikai.draw()
            r4y.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("私はたぶん、ずっとここに",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("いるから・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("もう会えることなんて",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ないかもしれないけど",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==37:#20個
            sikai.center=f3f.center
            sikai.draw()
            r4y.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("またどこかで会えたら",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("又はなそうね",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)

        if n6==38:#20個
            sikai.center=f3f.center
            sikai.draw()
            r1501.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("うん、はなそう",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("ありがと・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==39:#20個
            sikai.center=f3f.center
            sikai.draw()
            r666.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("前世でも元気でね",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("さよなら・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==40:#20個
            sikai.center=f3f.center
            sikai.draw()
            r1501.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("うん・・さよなら",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
    if n5==99:
        if n6==1:
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・・・",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・・・",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・・・",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
        if n6==2:#n5==1のセリフ段落n4を２にしたときはn6==2までのセリフを書く
            r1.draw()#キャラクター
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("あれ？、、さっきここから出てきたはずなのに",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("1階に続く道が消えている",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なんでだろう、いったい何の仕業だろう",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("おかしなことばかりだ・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
       
       
       



    if n5==51:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("段ボールが置いてある",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("中には使い古した荷物が",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("入っている",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("周りも汚れている・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100

 
    if n5==52:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("いろんなものが置いてある",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("なかなか見ない",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("変わった形をしたものがおおいい",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("・・・・・・・・・・・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
      
    if n5==53:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("どうやらここで",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("料理をしていたのだろうか",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("見ていると不思議に",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("思える",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100

    if n5==54:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("花瓶だ・・不思議なことに、まだ元気に",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("花は咲いている、花瓶には",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("黄色＝４",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("と書かれてある",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
            
    #if n5==54:#
        #if n6==1:
           # nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
           #screen.draw.text("花瓶がきれいだ",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
           # screen.draw.text("不思議なことに",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
           # screen.draw.text("まだ元気に",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            #screen.draw.text("花は咲いている",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
           # www=100
            
    if n5==55:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ダイヤの模様が",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("描かれている",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("その間には",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("ボールが置いてある",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
            
    if n5==56:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("ダイヤの模様が",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("描かれているその間には",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("白＝9と書かれた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("ボールが置いてある",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
            
            
    if n5==58:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("水晶のようなものと",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("棚のようなものがある",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("横には様々な物が並べておいてある",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("あるものには緑＝7と削られた跡がある",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
            
            
    if n5==57:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("洗面所だろうか？",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("水の入ったコップと",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("水をためた",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("蛇口のようなものがある",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
            
    
    if n5==59:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("壊れたと思われる",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("物が沢山置かれている",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("どれも全て",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("大きなひびが入っている",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
    if n5==666:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("水色のカ－ペットの上に",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("鏡と、ブロックのようなものが",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("おかれている",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("鏡はきれいになっている",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100
    if n5==777:#
        if n6==1:
            nnnn.draw()#キャラクターも表示させるときに文章の後ろにキャラクターを隠したいときに書く
            screen.draw.text("机にはクマのぬいぐるみや",(0,318),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("青いカチューシャが置いてある、",(0,358),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            screen.draw.text("その横には、水の入った容器と、５角形",(0,398),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30) 
            screen.draw.text("のブロックのようなものが置いてある・・・",(0,438),fontname='a.ttc',owidth=1.5,color="WHITE",fontsize=30)
            www=100


            
            
    if www!=0:
        www-=1
    #テキスト↑
    if n3<4:
        if n1!=n0:#nnnnnnnnnnnnnnnnnnn
            n.topleft=(n2*50,310+n3*40)
            nnn.topleft=(0,350+n3*40)
            n1+=1
            n.draw()
            nnn.draw()
        if n1==n0:
            n2+=1
            n1=0
            #if it==0:
            from pygame import mixer
            mixer.init()
            mixer.music.load("ec.wav")##8888888888888888888888888
            mixer.music.play(1)
            time=n0
            #it=1
            if n2==15:
                n2=0
                n3+=1
                yq=1###########222222222222222222222222222222222222
    #テキスト表示↑
    if t3t==1:#金庫
        tt3.draw()
        tt32.draw()
        tt33.draw()
        tt34.draw()
        tt35.draw()
        if tt322t!=0:
            ttt2.draw()
            tt322t-=1
            if tt322t==7:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        if tt333t!=0:
            ttt3.draw()
            tt333t-=1
            if tt333t==7:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        if tt344t!=0:
            ttt4.draw()
            tt344t-=1
            if tt344t==7:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        if tt355t!=0:
            ttt5.draw()
            tt355t-=1
            if tt355t==7:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("[ "+str(tt322),(0,0),owidth=1.5,color="GRAY",fontsize=100)
        screen.draw.text("[ "+str(tt333),(180,0),owidth=1.5,color="GRAY",fontsize=100)
        screen.draw.text("[ "+str(tt344),(360,0),owidth=1.5,color="GRAY",fontsize=100)
        screen.draw.text("[ "+str(tt355),(540,0),owidth=1.5,color="GRAY",fontsize=100)
        ttttt.draw()
        screen.draw.text("戻る→",(360,350),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=40)
        t22.draw()
        screen.draw.text("OPEN",(51.8,350),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=40)
        if t34t==1:
            if tt322==7 and tt333==9 and tt344==7 and tt355==4:#暗証番号を１１１１に設定
                t33t=90
                t34t=0
                t3t=0
                if n3==5 and n4==0  and  n6==0 and s1==4:#
                    n3=0                                                                                                                                                                        
                    n5=7#　←その場所のテキストのアドレス　                                                                                        
                    n4=1#　←そのテキストの段落数設定
                    n6=1#　←テキスト表示する際は1にする
                    p1=1
                    s1=5
            if tt322!=1 or tt333!=1 or tt344!=1 or tt355!=1:
                t33t=-90
                t34t=0  
        if t33t>0:
            if t33t>82:
                t3t3.draw()
            screen.draw.text("金庫が開いた",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            t33t-=1               
        if t33t<0:
            if t33t<-82:
                t3t3.draw()
            screen.draw.text("番号が違います",(0,200),fontname='a.ttc',owidth=1,color="WHITE",fontsize=30)
            t33t+=1
    if u6!=0:
        u6-=1
    if u3>0:#←マップ移動の時の　はいORいいえ
        if  m1==1:
            if doa.colliderect(c):
                screen.draw.text("2階に移動しますか？",(196,50),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=40)
                wq=1
            if not doa.colliderect(c):
                screen.draw.text("地下に移動しますか？",(196,50),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=40)
            u1.draw()
            u2.draw()
            if u4>0:
                u1u.draw()
                u4-=1
                u3-=1
            if u5>0:
                u2u.draw()
                u5-=1
                u3-=1
                
        if  m1==2:
            screen.draw.text("上に戻りますか？",(196,50),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=40)
            u1.draw()
            u2.draw()
            if u4>0:
                u1u.draw()
                u4-=1
                u3-=1
            if u5>0:
                u2u.draw()
                u5-=1
                u3-=1
        if  m1==3:
            screen.draw.text("3階に行きますか？",(196,50),fontname='a.ttc',owidth=0.3,color="WHITE",fontsize=40)
            u1.draw()
            u2.draw()
            if u4>0:
                u1u.draw()
                u4-=1
                u3-=1
            if u5>0:
                u2u.draw()
                u5-=1
                u3-=1
            
    if t55==1:
        t555.draw()
        if p6p==2:
           t5555.draw()
        tt5.topleft=(500,0)
        tt5.draw()
   
    if t70==1:
        t777.draw()
        if p14p==2:
            t72.draw()
        tt5.topleft=(0,0)
        tt5.draw()#戻るボタン


    if xx2==1:
        w1.draw()
        w2.draw()
        w3.draw()
        w4.draw()
        w5.draw()
        w6.draw()
        w7.draw()
        w8.draw()
        if yy1!=0:
             w11.draw()
             yy1-=1
             if yy1==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y1),(60,0),owidth=1.5,color="GRAY",fontsize=100)
        if yy2!=0:
             w22.draw()
             yy2-=1
             if yy2==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y2),(180,0),owidth=1.5,color="GRAY",fontsize=100)
        if yy3!=0:
             w33.draw()
             yy3-=1
             if yy3==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y3),(300,0),owidth=1.5,color="GRAY",fontsize=100)
        if yy4!=0:
             w44.draw()
             yy4-=1
             if yy4==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y4),(420,0),owidth=1.5,color="GRAY",fontsize=100)
        if yy5!=0:
             w55.draw()
             yy5-=1
             if yy5==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y5),(60,200),owidth=1.5,color="GRAY",fontsize=100)
        if yy6!=0:
             w66.draw()
             yy6-=1
             if yy6==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y6),(180,200),owidth=1.5,color="GRAY",fontsize=100)
        if yy7!=0:
             w77.draw()
             yy7-=1
             if yy7==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y7),(300,200),owidth=1.5,color="GRAY",fontsize=100)
        if yy8!=0:
             w88.draw()
             yy8-=1
             if yy8==8:
               from pygame import mixer
               mixer.init()
               mixer.music.load("ga.wav")##8888888888888888888888888
               mixer.music.play(1)
        screen.draw.text("("+str(y8),(420,200),owidth=1.5,color="GRAY",fontsize=100)
        tt5.topleft=(0,0)
        tt5.draw()
        call.draw()
        if yy9!=0:
             call2.draw()
             yy9-=1

    if m1==4:#mmmmmmmmmmmmm
            screen.clear()
            screen.fill((108,100,55))
            tt5.draw()
            game2.draw()
            z.draw()
            if keyboard.down:
                if z.y<600:
                    z.y+=4

            if keyboard.up:
                if z.y>0:
                    z.y-=4
                    
    
            if keyboard.left:
                if z.x>0:
                    z.x-=4
 
            if keyboard.right:
                if z.x<800:   
                    z.x+=4
            screen.draw.text("("+str(x1),(60,0),owidth=1.5,color="GRAY",fontsize=100)
       
            screen.draw.text("("+str(x2),(180,0),owidth=1.5,color="GRAY",fontsize=100)
        
            screen.draw.text("("+str(x3),(300,0),owidth=1.5,color="GRAY",fontsize=100)
      
            screen.draw.text("("+str(x4),(420,0),owidth=1.5,color="GRAY",fontsize=100)
        
            screen.draw.text("("+str(x5),(60,200),owidth=1.5,color="GRAY",fontsize=100)
        
            screen.draw.text("("+str(x6),(180,200),owidth=1.5,color="GRAY",fontsize=100)
      
            screen.draw.text("("+str(x7),(300,200),owidth=1.5,color="GRAY",fontsize=100)
        
            screen.draw.text("("+str(x8),(420,200),owidth=1.5,color="GRAY",fontsize=100)
            if game2.colliderect(z):
                if keyboard.down:
                    if z.y<600:
                        z.y-=4
                        
                if keyboard.up:
                    if z.y>0:
                        z.y+=4
                        
        
                if keyboard.left:
                    if z.x>0:
                        z.x+=4
     
                if keyboard.right:
                    if z.x<800:   
                        z.x-=4
    if m1==5:#mmmmmmmmmmmmm
                
        global sukoa,dame, sukoa, damtime,ddx,ggx, gx,qx,ax,bx,cx,dx,tx
        screen.fill((70,10,100))##画面の背景の色を調整
        screen.draw.text("SCOREキー玉を発射",(420,0),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=30)
        if not man.colliderect(c):
                m1=3
                p21p=1
        hai.draw()
        if damtime > 0: 
            daiya2.y=kenn.y
            daiya2.x=kenn.x 
            daiya2.draw()
        else:
            kenn.draw()

        for ix,obj in enumerate(ddx):#enumerateでojjのFOR文を何個目に取り出したかの数字とセットで出力→「０；とら　１；かめ　２；犬」※iはなくても動く
            obj.draw()
        #    screen.draw.text(str(i),(obj.x,obj.y))#DDから何個目に取り出したかの数（i）の数を出てきた敵のそばに表示
            
        for ix in ggx:#ddに入れたTEKIの画像をiに入れる
            ix.draw()
        if	dame>0:
            if dame==1:
                screen.draw.text("HP:"+str(dame),(300,0),owidth=1.5,color="RED",fontsize=40)
            else:
                screen.draw.text("HP:"+str(dame),(300,0),owidth=1.5,color="GREEN",fontsize=40)
            screen.draw.text("SCORE:"+str(sukoa),(0,0),owidth=1.5,color="YELLOW",fontsize=40)#←画像と画像が重なったときにプログラムで下に画像出力された画像が表示されるので、隠れないように下に書いてる
            #                              ↑
            #+strで””の中のSCOREの右に（　　　）内の値を表示してくれる

        if dame<1:
            m1=3
            it=1
            tame=120
            m4m.y-=105

            sukoa= 0 #左上に表示されるスコアの値の変数
            damtime= 0#ダメージ受けている間か、間じゃないか確認するやつ
            ddx = []#敵がランダムに出てくれるようにここから敵画像ここから引っ張って来る
            ggx = []#玉出すための入れ物
            gx=0 #g=60で割って1秒間に１回球が出てくれるようにしてくれる
            dame = 3#←HP変数をdameにしHPを１０に
            qx=0
            ax=0#ダメージで揺れる
            bx=0#ダメージで揺れるときの動き
            cx=1#スピード上げるための変数
            dx=1#
            tx=60#　T÷60の秒数ごとに敵が出現

        if sukoa >= 50:#スコアが50まで行ったらクリア
            if dame>0:
                screen.clear()
                screen.fill((30,30,100))##画面の背景の色を調整
                screen.draw.text("GAME CLEAR!!!",(100,300),owidth=1.5,color="YELLOW",fontsize=100)
                tt5.topleft=(0,0)
                tt5.draw()
                screen.draw.text("("+str(x1),(60,0),owidth=1.5,color="GRAY",fontsize=100)
       
                screen.draw.text("("+str(x2),(180,0),owidth=1.5,color="GRAY",fontsize=100)
        
                screen.draw.text("("+str(x3),(300,0),owidth=1.5,color="GRAY",fontsize=100)
      
                screen.draw.text("("+str(x4),(420,0),owidth=1.5,color="GRAY",fontsize=100)
        
                screen.draw.text("("+str(x5),(60,200),owidth=1.5,color="GRAY",fontsize=100)
        
                screen.draw.text("("+str(x6),(180,200),owidth=1.5,color="GRAY",fontsize=100)
      
                screen.draw.text("("+str(x7),(300,200),owidth=1.5,color="GRAY",fontsize=100)
        
                screen.draw.text("("+str(x8),(420,200),owidth=1.5,color="GRAY",fontsize=100)


    if m.colliderect(c) and 0<s1<4 and m1==0 and q1==1 and n4==0  and  n6==0 and h1!=2:
         screen.draw.text("dキーで入る",(420,0),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=30)
    if mm.colliderect(c) and 0<s1<4 and m1==1 and q1==1 and n4==0  and  n6==0 and h1!=2:
         screen.draw.text("dキーで出る",(420,0),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=30)
    if k==1:
        s1=11
        if p24p==1:
            s1=12
   
    if s1!=s2:
        s3=300
        s2=s1
        if 5<=s1<=7 or q1==0:
            s3=0
    if s3!=0:
        s3-=1
        screen.draw.text("目標が変わりました!",(0,100),fontname='a.ttc',owidth=1.5,color="GRAY",fontsize=30)
        screen.draw.text("sキーを押してcheckしてみよう！！！",(0,135),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
    if j1==1 and h1==2:
        
        jjj.center=i.center
        jjj.draw()
        screen.draw.text("ストーリーの進み具合",(420,20+1*40),fontname='a.ttc',owidth=1,ocolor="BLACK",color="GRAY",fontsize=25)
        screen.draw.text("①---②---③---④---⑤",(420,20+2*40),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
        screen.draw.text("始まり→→→→→終わり",(420,20+2*40+30),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)

        if s1<4:
           screen.draw.text("現在の進み具合①",(420,20+3*40+30),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
        if 4<=s1<8:
           screen.draw.text("現在の進み具合②",(420,20+3*40+30),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
        if 8<=s1<10:
           screen.draw.text("現在の進み具合③",(420,20+3*40+30),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
        if 10<=s1<12:
           screen.draw.text("現在の進み具合④",(420,20+3*40+30),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
        if s1==12:
           screen.draw.text("現在の進み具合⑤",(420,20+3*40+30),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
           
        if m1==1:
            screen.draw.text("↓建物1階マップ↓(壁部分)",(350,20+3*40+80),fontname='a.ttc',owidth=1.5,color="RED",fontsize=30)
            map222.midbottom=jjj.midbottom
            map222.draw()
            
            screen.draw.text("現在地",(535-(a.x/10),+416-(a.y/10)),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=20)
        if m1==3:
            screen.draw.text("↓建物2階マップ↓(壁部分)",(350,20+3*40+80),fontname='a.ttc',owidth=1.5,color="RED",fontsize=30)
            map444.midbottom=jjj.midbottom
            map444.draw()
            screen.draw.text("現在地",(535-(m4m.x/10),+420-(m4m.y/10)),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=20)

        if m1==2:
            screen.draw.text("↓建物地下マップ↓(壁部分)",(350,20+3*40+80),fontname='a.ttc',owidth=1.5,color="RED",fontsize=30)
        
            map333.midbottom=(530,320)
            map333.draw()
            screen.draw.text("現在地",(535-(m3m.x/10),+310-(m3m.y/10)),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=20)
        if m1==6:
            screen.draw.text("↓建物3階マップ↓(壁部分)",(350,20+3*40+80),fontname='a.ttc',owidth=1.5,color="RED",fontsize=30)

            map555.midbottom=jjj.midbottom
            map555.draw()
            screen.draw.text("現在地",(550-(f3f.x/10),+420-(f3f.y/10)),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=20)
        if m1==0:
            screen.draw.text("      ↓外マップ↓(壁部分)",(350,20+3*40+80),fontname='a.ttc',owidth=1.5,color="RED",fontsize=30)

            map1111.midbottom=jjj.midbottom
            map1111.draw()
            screen.draw.text("現在地",(535-(m1m.x/10),+440-(m1m.y/10)),fontname='a.ttc',owidth=1.5,color="GREEN",fontsize=20)

            
    if it>0:
        iit+=1
        if iit>time:
            it=0
            iit=0
            
    if p24p==2:
        m1=6

    if p21p==2 and man.colliderect(c)and m1==3:
         screen.draw.text("何かキーを押してゲームを始めてみよう！！！",(0,135),fontname='a.ttc',owidth=1.5,color="YELLOW",fontsize=20)
    if p21p==1:
        m1=3

           
