#include <stdio.h>
#include <math.h>
int main(void)
{
	float x,a,j;
	printf(" ");
	for(x=0;x<=360;x+=10){
			a=3.14159/180*x;
			printf("%6.2f %6.2f",x,sin(a));
			for(j=0;j<x+10;j++){
				printf(" ");
			}
			printf("*");
	}
	return 0;
}