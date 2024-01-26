#include<stdio.h>
struct channel{
	int ch;
	char name[20];
	double frequency;
};
void main(void)
{
	int i;

	struct channel kanto[] = {
	{4,"日本テレビ",543.142857},
	{5,"テレビ朝日",539.142857},
	{6,"TBSテレビ", 527.142857},
	{7,"テレビ東京",533.142857},
	{8,"フジテレビ",521.142857},
};

	for(i=0;i<5;i++)
	{
		printf("%d",kanto[i].ch);
		printf("%s",kanto[i].name);
		printf("%f\n",kanto[i].frequency);
	}
}