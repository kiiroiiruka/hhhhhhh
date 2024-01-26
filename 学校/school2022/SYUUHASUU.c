#include<stdio.h>
include<stdlib.h>
struct channel{
	int ch;
	char name[20];
	double frequency;
};
void main(void)
{
	int i;
	int no;
	struct channel kanto[] = {
	{4,"日本テレビ",543.142857},
	{5,"テレビ朝日",539.142857},
	{6,"TBSテレビ", 527.142857},
	{7,"テレビ東京",533.142857},
	{8,"フジテレビ",521.142857},
};
printf("周波数を調べたいCH番号？：");
	scanf("%d",&no);
	for(i=0;i<5;i++)
	{
		printf("%d",kanto[i].ch);
		printf("%s",kanto[i].name);
		printf("%f\n",kanto[i].frequency);
	}
}