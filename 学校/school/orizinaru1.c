#include <stdio.h>
int main(void)
{
	int c;
	printf("���Ȃ��̔N��������Ă�������");
	scanf("%d",&c);
	if(c<=2)
	{
	printf("���ꂷ��ɂ͂Q�O�O�K�v�ł�");
	}
	else if(3<=c&&c<=10)
	{
	printf("���ꂷ��ɂ͂��Ȃ��͂T�O�O�~�K�v�ł�");
	}
	else if(11<=c&&c<=15)
	{
	printf("���Ȃ��͂P�O�O�O�~�K�v�ł�");
	}
	else if(16<=c)
	{
	printf("���Ȃ��͂P�T�O�O�~�K�v�ł�");
	}
	return 0;
}