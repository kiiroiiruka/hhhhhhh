#include <stdio.h>
int main()
{
	float a b;
	 b=1.052;
	printf("---TAXI 料金計算---\n利用距離を[km]で入力してっください\n")
	scanf("%f",&a);
	if (a<=1.052)
	{
		printf("ご利用料金は420円です");
		}
	else if(a>=1.285)
		{
	while(b<a)
		{
		b=b+0.233;
		}
		printf("ご料金は%d円です",b);
	}
	return 0;
}
	