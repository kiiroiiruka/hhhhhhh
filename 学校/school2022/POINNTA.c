#include<stdio.h>
int main(void)
{
	int num[]={1,2,3,4,5},*p,i,sum;
	p=&num[0];
	
	printf("„¡„Ÿ„Ÿ„Ÿ„Ÿ„¦„Ÿ„¦„Ÿ„Ÿ„Ÿ„Ÿ„¢\n");
	printf("„ address „ ’l„ •Ï”–¼	„ \n");
	printf("„¥„Ÿ„Ÿ„Ÿ„Ÿ„©„Ÿ„©„Ÿ„Ÿ„Ÿ„Ÿ„§\n");
	for(i=0;i<5;i++)
	{
		*p += 10;
		printf("„ %p„ %d„ num[%d]  „ \n",p,*p,i);
		p++;
	}
	printf("„¤„Ÿ„Ÿ„Ÿ„Ÿ„¨„Ÿ„¨„Ÿ„Ÿ„Ÿ„Ÿ„£");

return 0;
}



	
