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
	{4,"���{�e���r",543.142857},
	{5,"�e���r����",539.142857},
	{6,"TBS�e���r", 527.142857},
	{7,"�e���r����",533.142857},
	{8,"�t�W�e���r",521.142857},
};

	for(i=0;i<5;i++)
	{
		printf("%d",kanto[i].ch);
		printf("%s",kanto[i].name);
		printf("%f\n",kanto[i].frequency);
	}
}