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
{
    TRISC =0;//c$B%]!<%H$r$9$Y$F=PNO%b!<%I(B
    PORTC = 0;//$B=PNO%b!<%IF~NO%b!<%I$+7h$^$C$F$J$$$N$G#c%]!<%H$r=i4|2=(B
    while(1){
    LATC=0x01;
    __delay_ms(200);//$B#2#0#0#m#sCY1d$5$;$k(B
    LATC=0x00;
    __delay_ms(200);//$B#2#0#0#m#sCY1d$5$;$k(B
    }
}

//LED$B$r8w$i$;$k$?$a$K$O#c%]!<%H$r=i4|2=(B
