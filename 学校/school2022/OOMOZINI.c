#include<stdio.h>
int main(void)
{
	char moji[]="NiiZa SouGou giJUtsu KouTOU GAkkoU",i;
	printf("BEFORE -- %s\n",moji);
	for(i=0;i<35;i++)
	{
		if(moji[i] > 96)moji[i]=moji[i]-32;
	}
	printf("AFTER  -- %s",moji);
	return 0;
}
