#include <stdio.h>
int main(void)
{
	int kokugo,suugaku,eigo,syakai,rika,goukei;
	float heikinn;
	printf("国語の点数=");
	scanf("%6d",&kokugo);
	printf("数学の点数=");
	scanf("%6d",&suugaku);
	printf("英語の点数=");
	scanf("%6d",&eigo);
	printf("社会の点数=");
	scanf("%6d",&syakai);
	printf("理科の点数=");
	scanf("%6d",&rika);
	goukei=kokugo+suugaku+eigo+syakai+rika;
	heikinn=goukei/5.0;
	printf("┌──────┐\n");
	printf("│考査得点一覧│\n");
	printf("├──┬───┤\n");
	printf("│国語│%6d│\n",kokugo);
	printf("├──┼───┤\n");
	printf("│数学│%6d│\n",suugaku);
	printf("├──┼───┤\n");
	printf("│英語│%6d│\n",eigo);
	printf("├──┼───┤\n");
	printf("│社会│%6d│\n",syakai);
	printf("├──┼───┤\n");
	printf("│理科│%6d│\n",rika);
	printf("├──┼───┤\n");
	printf("│合計│%6d│\n",goukei);
	printf("├──┼───┤\n");
	printf("│平均│%6.2f│\n",heikinn);
	printf("└──┴───┘\n");
	return 0;
}
