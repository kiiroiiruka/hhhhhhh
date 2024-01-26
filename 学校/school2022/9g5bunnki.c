#include <stdio.h>

int gobai(int);
int jubai(int);

void main(void)
{
	int a=10;
	printf("%d\n",gobai(a));
	printf("%d\n",jubai(a));
}
int gobai(int x)
{
	return x * 5;
}

int jubai(int x)
{
	return x * 10;
}