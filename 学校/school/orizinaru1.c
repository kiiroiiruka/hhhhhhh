#include <stdio.h>
int main(void)
{
	int c;
	printf("あなたの年齢を教えてください");
	scanf("%d",&c);
	if(c<=2)
	{
	printf("入場するには２００必要です");
	}
	else if(3<=c&&c<=10)
	{
	printf("入場するにはあなたは５００円必要です");
	}
	else if(11<=c&&c<=15)
	{
	printf("あなたは１０００円必要です");
	}
	else if(16<=c)
	{
	printf("あなたは１５００円必要です");
	}
	return 0;
}