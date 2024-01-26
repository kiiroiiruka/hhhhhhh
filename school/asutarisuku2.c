#include <stdio.h>
int main(void)
{
	int i,j,k,m,l,g;
		for(j=0;j<6;j++)
		{
			for(i=j;i>1;i--)
			{
				printf("*");
			}
			printf("\n");
			}
	
			for(j=6;j!=0;j--)
			{

			for(i=j;i!=0;i--)
			{
				printf("*");
			}
				printf("\n");
			}
			for(j=0;j<5;j++)
			{
				printf("-");
			}

			for(j=0;j<6;j++)
			{
				k=0;
			for(i=j;i<5;i++)
			{
				printf(" ");
				k=k+1;
			}
			for(m=k;m!=5;m++)
			{
			printf("*");
			}
			printf("\n");
		}
	for(j=0;j<5;j++)
	{
		printf("-");
	}
	printf("\n");

	for(i=0;i<6;i++)
	{	
		k=0; 
	for(j=i;j<5;j++)
	{	
				
				
		printf(" ");
		k=k+1;
	}
	for(m=5-k;m>0;m--)
	{
		printf("*");
	}
	for(l=k-1;l<5;l++)
	{
		printf("*");
	}
		printf("\n");
	}
		
		for(i=5;i>0;i--)
		{
				k=0;
		 	for(g=6-i;g>0;g--)
			{
			if(g>0)
			{
				printf(" ");
			}
				k=k+1;
		}	
			
			for(m=k;m<6;m++)
			{
				printf("*");
			}
			for(l=k;l<5;l++)
			{
				printf("*");
			}
				printf("\n");
		}
			for(j=0;j<5;j++)
			{
				printf("-");
			}
			printf("\n");
				g=1;
			for(m=0;m<5;m++)
			{
				printf(" ");
			}
				printf("*");
				printf("\n");
			for(m=1;m<6;m++)
			{
			for(i=m;i<5;i++)
			{
				printf(" ");
			}
				printf("*");
			if(m>1)
			{
			g=g+2;
			for(k=0;k<g;k++)
			{
				printf(" ");
			
			}
				printf("*");
				printf("\n");
			}
			else
			{	printf(" ");
				printf("*");
				printf("\n");
			}
			}
			
				g=0;
			for(j=2;j<7;j++)
			{
			for(i=j;i>1;i--)
			{
				printf(" ");
			}
				printf("*");
			for(l=g;l<7;l++)
			{
				printf(" ");
			}
			if(j==6)
			{
				return 0;
			}
			else
			g=g+2;
			printf("*");
			printf("\n");
			}

			
			
	return 0;
}
