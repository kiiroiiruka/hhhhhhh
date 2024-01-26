#include<stdio.h>
#include<stdlib.h>
int main(void)
{
	int i,j,tenp,a[100];

	srand((unsigned int)time(NULL));
	printf("ソート前\n");
	for(i=0;i<100;i++)
		{
			a[i]=rand();
			if(i%10==0)
			{
				printf("\n");
			}
			printf("%d ",a[i]);
			if(i==99)
			{
				printf("\n\n");
			}
		}
	printf("選択ソートします。\n\n");
		for(j=0;j<99;j++)
		{
			for(i=j;i<100;i++)
				{
				if(a[j]>a[i+1])
					{
						tenp=a[j];
						a[j]=a[i+1];
						a[i+1]=tenp;
					}
				}
		}
		printf("ソート後\n");
		for(i=0;i<100;i++)
		{
			if(i%10==0)
			{
				printf("\n");
			}
			printf("%d ",a[i]);
		}return 0;
}