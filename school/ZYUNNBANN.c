#include<stdio.h>
//include<stdlib.h>
int main(void)
{
	int dat[]={1,-2,1000,999};
	int i,j;
	int tenp;

	//srand()
	printf("初期%d %d %d %d \n",dat[0],dat[1],dat[2],dat[3]);

		for(j=0;j<3;j++)
		{
			for(i=j;i<4;i++)
				{
				if(dat[j]>dat[i+1])
					{
						tenp=dat[j];
						dat[j]=dat[i+1];
						dat[i+1]=tenp;
						printf("入れ替え%d %d %d %d \n",dat[0],dat[1],dat[2],dat[3]);
					}
				}
			}
	printf("終了%d %d %d %d \n",dat[0],dat[1],dat[2],dat[3]);
	return 0;
}