#include <stdio.h>
void main(){
int a,b,c,d;
scanf("%d",&a);
scanf("%d",&b);
scanf("%d",&c);
d=b*b-4*a*c;
if(0<d) printf("2");
if(0==d) printf("1");
if(0>d) printf("0");
}