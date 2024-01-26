#include <stdio.h>
#include <stdlib.h>
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
		for(j=0;j<100;j++)
		{
			for(j=99;j>=i+1;j--)
				{
				if(a[j-1]>a[j])
					{
						tenp=a[j];
						a[j]=a[i-1];
						a[i-1]=tenp;
					}
				}
		}
	for(i=0;i<100;i++)
		{
			printf("%d ",a[i]);
}
return 0;

}