#include <stdio.h>
int main(void)
{
	float a,b,c;
	 b=1.285;
	c=0.0;
	printf("---TAXI 料金計算---\n利用距離を[km]で入力してっください\n");
	scanf("%f",&a);
	if (a<=1.284)
	{
		printf("ご利用料金は420円です");
		}
	else if(a>=1.285)
		{
	while(b<a)
		{
		b=b+0.233;
	c++;
		}
		printf("ご料金は%f円です",420+(c*80));
	}
	return 0;
}
	