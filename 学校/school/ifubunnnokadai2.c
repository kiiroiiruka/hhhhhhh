#include <stdio.h>
void main()
{
	int ne;
	char an;
	printf("�N��́H\n");
	scanf("%d",&ne);
	if((ne<=0)||(ne>=120))
	{
		printf("�������N�����͂��Ă�������");
	}
	else if(ne<=3)
	{
		printf("���Ȃ��̃`�P�b�g�̉��i��0�~�ł��B\n");
	}
	else if((ne>=4)&&(ne<=11))
	{
		printf("���Ȃ��̃`�P�b�g�̉��i��5400�~�ł��B\n");
	}
	
	else if(ne==12)
	{
		printf("���w���ł����H y or n \n");

	fflush(stdin);
	scanf("%c",&an);
	if (an=='y')
	{
		printf("���Ȃ��̃`�P�b�g�̉��i��5400�~�ł��B");
	}
	else if(an=='n')
	{
		printf("���Ȃ��̃`�P�b�g�̉��i��8400�~�ł�");
	}
		}
	else if((ne>=13)&&(ne<=64))
	{
		printf("���Ȃ��̃`�P�b�g�̉��i��8200�~�ł��B\n");
	}
	else if(ne>=65)
	{
		printf("���Ȃ��̃`�P�b�g���i��7400�~�ł��B\n");
	}
}
