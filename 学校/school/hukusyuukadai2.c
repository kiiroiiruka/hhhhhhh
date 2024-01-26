#include <stdio.h>
#include <stdlib.h>    
int main(void)
{
	int n,b;
	printf("整数を入力してください。\nn=");
	scanf("%d",&n);
	if(n<1)
	{
	printf("エラー");
	exit(0); //0＝正常終了
	}
	b=((1 + n ) * n ) / 2;
	printf("和は%d",b);
	return 0;
}
