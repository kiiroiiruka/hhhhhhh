#include<stdio.h>
int main(void)
{
	float a=0.0;
	int kaisuu,n;
	printf("‰ñ”");
	scanf("%d",&kaisuu);
		for(n=1;n<=kaisuu;n++){
		if(n%2==0){
		a=a-(1.0/(2n-1));
		}else{
		a=a+(1.0/(2n-1));
		}
			}
		a=a*4;	
		printf("ƒÎ=%f\n",a);
	return 0;
}