#include <stdio.h>
#include <stdlib.h>    
int main(void)
{
	int n,b;
	printf("��������͂��Ă��������B\nn=");
	scanf("%d",&n);
	if(n<1)
	{
	printf("�G���[");
	exit(0); //0������I��
	}
	b=((1 + n ) * n ) / 2;
	printf("�a��%d",b);
	return 0;
}
