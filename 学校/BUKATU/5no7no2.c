#include <stdio.h>
void main (void)
{
int i;
int data[5];
char text[5][128]={
	"国語",
	"数学",
	"科学",
	"英語",
	"地理"};
	printf("得点どうででした\n");
	for(i=0;i<5;i++)
{
		printf("%s",text[i]);
		scanf("%d",&data[i]);
	}
	printf("まとめると\n");
	for(i=O;i<5;i++)
{
	printf("%s;%d点\n",text[i],date[i])
}
}
