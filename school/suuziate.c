#include<stdio.h>//数字を当てるゲーム
#include<stdlib.h>
#include<time.h>
int main(void)
{
	int a[4],b,c[4],d,e=0,w;
	srand((unsigned int)time(NULL));
	for(b=0;b<3;b++)
		{
			a[b]=rand()%10;
		}
		while(e<3)
		{
			for(b=0;b<3;b++)
				{
					printf("数字%d桁目\n",b+1);
					scanf("%d",&c[b]);
					if(c[b]==111)
					{
						printf("答え");
						for(b=0;b<3;b++)
						{
							printf("%d",a[b]);
						}
						return 0;
					}
				}
			for(d=0;d<3;d++)
				{
				for(b=0;b<3;b++)
					{

						if(a[d]==c[b])
							{
								e=e+1;
							}
					}
				}
				printf("同じ数字は%d個\n",e);	
		}
		
	return 0;
}