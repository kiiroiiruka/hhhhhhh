#include <stdio.h>
#include <stdlib.h>
int main(void)
{
	int x,t,i,hi[100];
	srand((unsigned int)time(NULL));
	printf("�\�[�g�O�F\n");
		for(i=0;i<100;i++)
		{
			if(i%10==0)
			{
				printf("\n");
			}
			hi[i]=rand();
			printf("%d ",hi[i]);
		
		}
	


	printf("\n\n�o�u���\�[�g���܂��B\n\n");
	printf("�\�[�g��F\n");
	for(x=0;x<100;x++)
		{
		for(i=99;i>0;i--)
			{
				if(hi[i] < hi[i-1])
				{
					t=hi[i-1];
					hi[i-1]=hi[i];
					 hi[i] =t;
				}
			}
		}
	for(i=0;i<100;i++)
		{
		if(i%10==0)
			{			
				printf("\n");
			}
		printf("%d ",hi[i]);
		
		}
	return 0;
}	