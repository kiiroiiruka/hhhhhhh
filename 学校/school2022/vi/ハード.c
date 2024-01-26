// Hardware program 

#include<xc.h>
#include<pic18f4550.h>



// PIC18F4550 Configuration Bit Settings
// 'C' source line config statements

// USB  Config
#pragma config PLLDIV = 5       
#pragma config VREGEN = OFF
#pragma config USBDIV = 2       

// CPU Clock
#pragma config FOSC = HSPLL_HS 
#pragma config CPUDIV = OSC1_PLL2

// Reset 
#pragma config FCMEN = OFF
#pragma config IESO = OFF
#pragma config PWRT = ON 
#pragma config BOR = ON                      
#pragma config BORV = 1
#pragma config MCLRE = ON                

     
// Watch Timer
#pragma config WDT = OFF        
#pragma config WDTPS = 32768
   
// Other
#pragma config CCP2MX = ON      
#pragma config PBADEN = ON      
#pragma config LPT1OSC = OFF          
#pragma config STVREN = ON      
#pragma config LVP = OFF       
#pragma config ICPRT = OFF      
#pragma config CP0 = OFF       
#pragma config CP1 = OFF        
#pragma config CP2 = OFF        
#pragma config CP3 = OFF        
#pragma config CPB = OFF       
#pragma config CPD = OFF        
#pragma config WRT0 = OFF       
#pragma config WRT1 = OFF      
#pragma config WRT2 = OFF      
#pragma config WRT3 = OFF       
#pragma config WRTC = OFF       
#pragma config WRTB = OFF       
#pragma config WRTD = OFF      
#pragma config EBTR0 = OFF      
#pragma config EBTR1 = OFF      
#pragma config EBTR2 = OFF      
#pragma config EBTR3 = OFF      
#pragma config EBTRB = OFF      


#define _XTAL_FREQ 20000000


    
void main(void)
{ TRISD=0x70;//入力モード
  TRISB=0x00;
  TRISE=0x00;
                    PORTD=0;
                    PORTB=0;
                    PORTE=0;
    ////復習課題のやつ───┤
   /* int a=0,b=0,c=0,i;
    char seg[16]=
    {0xc0,0xf9,0xa4,0xb0,0x99,0x92,0x82,0xf8,0x80,0x98,0x88,0x83,0xc6,0xa1,0x86,0x8e};*/
 //復習課題のやつ───┤
//課題２のやつ───┤
               /*char seg[16]=
                {0xc0,0xf9,0xa4,0xb0,0x99,0x92,0x82,0xf8,0x80,0x98,0x88,0x83,0xc6,0xa1,0x86,0x8e};
                    TRISD=0xFF;//入力モード
                    TRISB=0x00;
                    TRISE=0x00;
                    PORTD=0;
                    PORTB=0;
                    PORTE=0;
                 int i,j,m;
                    while(1)//whileに入れていと押されてから反応する処理ができない！
                    {    
                        LATB =seg[0];
                       if(PORTDbits.RD4==1)//押されてる　動いてくれてるので０
                       {
                          __delay_ms(10);
                          //LATB=seg[0];
                           //__delay_ms(200);
                          //while(PORTDbits.RD4==0);//hanaす         

                             // __delay_ms(10);

                              for(i=0;i<16;i++) 
                              {//10の位

                                 for(j=0;j<16;j++)
                                 {//1の位
                                      m=0;
                                     while(m<100)
                                     {
                                      PORTE=0x01;//左
                                     LATB=seg[i];

                                     __delay_ms(5);
                                      PORTE=0x02;//右
                                     LATB=seg[j];

                                     __delay_ms(5);
                                     m++;
                                     }
                                 }
                              }
                       }
                    }//while(1)の？　｝
                          LATB=seg[0];
                          LATE=0x00;
                          __delay_ms(2000);*/
    //課題２のやつ───┤
    //復習課題のやつ───┤
    /*TRISD=0x70;//入力モード
                    TRISB=0x00;
                    TRISE=0x00;
                    PORTD=0;
                    PORTB=0;
                    PORTE=0;
                
    while(1){
        if (c==0){
        if(PORTDbits.RD4==0)
        {   
            
            __delay_ms(10);
            LATE=0x02;
            LATB = 0x89;//RD0に出力する
            __delay_ms(10);
            if(b==0)
            {a+=1;
            b=1;}
        }
        if(PORTDbits.RD4==1)
        { __delay_ms(10);
            LATE=0x02;
            LATB = 0xc7;//RD0に出力する
            __delay_ms(10);
            b=0;
            
        }
         if(PORTDbits.RD5==0) 
         {
             __delay_ms(10);
           LATE=0x02;
           LATB=seg[a];
             __delay_ms(5000);
             c=1;
         }}
if(c>0)
 {
    for(i=0;i<100;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(1.91);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.91);//
        //__delay_us(10000000000000000000);//でもおっけい}
     }
     for(i=0;i<120;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(1.701);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.70);//
        //__delay_us(10000000000000000000);//でもおっけい}
     } 
   for(i=0;i<140;i++)
    {
        LATD = 0x01;//RD0に出力する
        __delay_ms(1.52);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.52);//
        //__delay_us(10000000000000000000);//でもおっけい}
    }

   for(i=0;i<150;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(1.43);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.43);//
        //__delay_us(10000000000000000000);//でもおっけい}
     }
  
   for(i=0;i<165;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(1.28);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.28);//
        //__delay_us(10000000000000000000);//でもおっけい}
     }
 for(i=0;i<180;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(1.14);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.14);//
        //__delay_us(10000000000000000000);//でもおっけい}
     }
 for(i=0;i<190;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(1.01);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(1.01);//
        //__delay_us(10000000000000000000);//でもおっけい}
     }
 for(i=0;i<200;i++)
    {
         LATD = 0x01;//RD0に出力する
        __delay_ms(0.96);//
        //__delay_us(10000000000000000000);//でもおっけい
        LATD = 0x00;//RD0の出力停止
        __delay_ms(0.96);//
        //__delay_us(10000000000000000000);//でもおっけい}
     }
      
     
       
   
      
     }
  
    
    
        

 }*/
 //復習課題のやつ───┤
    char s[3]={750,375,187.5,93.8};//
    int n=1,z=0,x=1,i,y=0,ii=0,w=0,p=0;//p
    int num=0;foat syu=0.0;
#define BPM 0.34
     while(1)
    {
           if(x<0)ii=(z*50);//それぞれの音階に対して音の長さがちょうどよくなるように計算
           if(0<x<15)ii=0;//それぞれの音階に対して音の長さがちょうどよくなるように計算
           if(20<x)ii=-(z*50);//それぞれの音階に対して音の長さがちょうどよくなるように計算
           switch(x){
               case 1:
                   syu=261;
                   break;
               default:
                   break;
           }
           num=syu*(4/(z+1))*BPM;
                   y=0;
         while (y<=num)//(s[z]+ii)+p 鳴らし終わった
         {
             
      
               
               
           if (x==1)
           {
               num=261*(z/4)*BPM;
               while(num>0){
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.91);//ド
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.91);
               num--;}
           y+=1;
           } 
           if (x==2)
           {
        
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.80);//ド＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.80);
           
     
           }
            if (x==3)
           {  
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.701);//レ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.701);
           
              y+=1;}
             if (x==4)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.61);//レ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.61);
           
              y+=1;}
           
               if (x==5)
           {  
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.52);//ミ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.52);
           
                 y+=1;}
    
               if (x==6)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.43);//ファ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.43);
           
                 y+=1;}
            if (x==7)
           {  
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.35);//ファ#
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.35);
         y+=1;
           }
    
               if (x==8)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.28);//ソ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.28);
           
                 y+=1;}
           if (x==9)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.20);//ソ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.20);
         y+=1;
           }
   
          if (x==10)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.14);//ラ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.14);
           
                 y+=1;}
    
               if (x==11)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.07);//ラ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.07);
             y+=1;}
             if (x==12)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.01);//シ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.01);
             y+=1;}
            if (x==13)
           {
        __delay_ms(2.01);
             y+=1;}
           
           //高い音↓
           
           
            if (x==21)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.91/2);//ド
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.91/2);
           y+=1;
           } 
           if (x==22)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.80/2);//ド＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.80/2);
           
              y+=1;}
            if (x==23)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.701/2);//レ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.701/2);
           
              y+=1;}
             if (x==24)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.61/2);//レ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.61/2);
           
              y+=1;}
           
               if (x==25)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.52/2);//ミ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.52/2);
           
                 y+=1;}
    
               if (x==26)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.43/2);//ファ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.43/2);
           
                 y+=1;}
            if (x==27)
           { 
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.35/2);//ファ#
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.35/2);
           y+=1;
           }
    
               if (x==28)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.28/2);//ソ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(0.64);
           
                 y+=1;}
           if (x==29)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.20/2);//ソ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.20/2);
           y+=1;
           }
   
          if (x==30)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(0.57);//ラ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.14/2);
           
                 y+=1;}
    
               if (x==31)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.07/2);//ラ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.07/2);
             y+=1;}
             if (x==32)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.01/2);//シ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.01/2);
             y+=1;}
          
           //高い音↑
           
           
          //低い音↓
            if (x==-1)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.91*2);//ド
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.91*2);
           y+=1;
           } 
           if (x==-2)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.80*2);//ド＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.80*2);
           
              y+=1;}
            if (x==-3)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.701*2);//レ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.701*2);
           
              y+=1;}
             if (x==-4){
           
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.61*2);//レ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.61*2);
           
              y+=1;}
           
               if (x==-5)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.52*2);//ミ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.52*2);
           
                 y+=1;}
    
               if (x==-6)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.43*2);//ファ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.43*2);
           
                 y+=1;}
            if (x==-7)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.35*2);//ファ#
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.35*2);
         y+=1;
           }
    
               if (x==-8)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.28*2);//ソ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.28*2);
           
                 y+=1;}
           if (x==-9)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.20*2);//ソ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.20*2);
         y+=1;
           }
   
          if (x==-10)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.14*2);//ラ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.14*2);
           
                 y+=1;}
               if (x==-11)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.07*2);//ラ＃
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.07*2);
             y+=1;}
             if (x==-12)
           {
          LATD = 0x01;//RD0に出力する
         __delay_ms(1.01*2);//シ
         LATD = 0x00;//RD0の出力停止
         __delay_ms(1.01*2);
             y+=1;}
          }
     
           //低い音↑
   
    
    if (y>=(s[z]+ii)+p)//鳴らし終わった
    {
        n+=1;
        //始まり？
        if (n==1)//何音目の音か
        {
            x=-1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
            p=20;
         
        }
        if (n==2)//何音目の音か
        {
            x=-1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
               p=20;
        }
         if (n==3)//何音目の音か
        {
            x=-3;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
            p=20;
        }
        if (n==4)//何音目の音か
        {
            x=21;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
        }
         if (n==5)//何音目の音か
        {
            x=22;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
            p=-10;
        }
        if (n==6)//何音目の音か
        {
            x=21;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
        }
         if (n==7)//何音目の音か
        {
            x=27;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
        }
        if (n==8)//何音目の音か
        {
            x=1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
        }
           if (n==9)//何音目の音か
        {
            x=9;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
            p=40;
        }
        if (n==10)//何音目の音か
        {
            x=6;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
                p=40;
        }
           if (n==11)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
              p=40;
        }
        if (n==12)//何音目の音か
        {
            x=12;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
                p=40;
        }
        if (n==13)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;//鳴らし始まる
                p=0;
        }
          if (n==14)//何音目の音か
        {
            x=-1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;
            
            
            if (w==0){
                n=1;
                w=1;
                p=-30;
            }
            
        
    
        }
         if (n==15)//何音目の音か
        {
            x=1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
               n+=1;
             
        
            }
         if (n==16)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;
             
        
            }
          if (n==17)//何音目の音か
        {
            x=22;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
             
        
            }
          if (n==18)//何音目の音か
        {
            x=5;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
             
        
            }
          if (n==19)//何音目の音か
        {
            x=29;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
          if (n==20)//何音目の音か
        {
            x=30;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
           if (n==21)//何音目の音か
        {
            x=22;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
          if (n==22)//何音目の音か
        {
            x=5;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
        
         if (n==23)//何音目の音か
        {
            x=6;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
               p=12;
          }
           if (n==24)//何音目の音か
        {
            x=7;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
         if (n==25)//何音目の音か
        {
            x=21;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
         if (n==26)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
           if (n==27)//何音目の音か
        {
            x=-1;//ドレミファソラシドのどの音を鳴らしているか
            z=1;//どのぐらいの感覚で流すか
               y=0;
          }
         if (n==28)//何音目の音か
        {
            x=21;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
        if (n==29)//何音目の音か
        {
            x=24;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
         if (n==30)//何音目の音か
        {
            x=26;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
         if (n==31)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
          }
         if (n==32)//何音目の音か
        {
            x=1;//ドレミファソラシドのどの音を鳴らしているか
            z=13;//どのぐらいの感覚で流すか
               y=0;
               p=10;
          }
        if (n==33)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
                   p=-200;
                   
                   //p=-60;
          }
          if (n==34)//何音目の音か
        {
            x=10;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
               p=-50;
          }
          if (n==35)//何音目の音か
        {
            x=13;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
            y=0;
              p=-150;
          
          }
         if (n==36)//何音目の音か
        {
            x=7;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
               p=3;
           
          }
         if (n==37)//何音目の音か
        {
            x=4;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
                 p=10;
                 
               
          }
         if (n==38)//何音目の音か
        {
            x=1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
                 p=100;
          }
         if (n==39)//何音目の音か
        {
            x=1;//ドレミファソラシドのどの音を鳴らしているか
            z=3;//どのぐらいの感覚で流すか
               y=0;
               p=90;
          }
        
        
             
        
             
             
        
        
  
        
        
        
    }}
}
        //？
        
        
        
        //    ド(-1) ド＃(-2) レ(-3) レ＃(-4) ミ(-5) ファ(-6) ファ#(-7) ソ(-8) ソ＃(-9)ラ(-10)ラ＃(-11)シ(-12) ←高い
        //x=  ド(1) ド＃(2) レ(3) レ＃(4) ミ(5) ファ(6) ファ#(7) ソ(8) ソ＃(9)ラ(10)ラ＃(11)シ(12) ←普通
        //    ド(21) ド＃(22) レ(23) レ＃(24) ミ(25) ファ(26) ファ#(27) ソ(28) ソ＃(29)ラ(30)ラ＃(31)シ(32) ←低い
        
        //z=  2/1(0) 4/1(1) 8/1(2) 16/1(3) ←鳴らす感覚
        
        
        
    
   
    
    
    





    
    
            
           
            
        
        

    
    
    
    
    
    

        


