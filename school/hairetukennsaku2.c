#include <stdio.h>
int main(void)
{
	int dat[10]={11,12,16,17,25,28,29,30,31,33};
	int j,key;
	int sum;
	printf("検索データー ");
	scanf("%d",&key);
	j=0;
	while(j<=9){
		if(key==dat[j])
		{
			break;
		}
	
	j++;
	}
	if(j<=9){
		printf("検索データーは%d番目\n",j+1);
	}
	else{
		printf("検索データーなし\n");
	}
	sum=0;
	for(j=0;j<10;j++)
	{
			sum=sum+dat[j];
	}
	printf("値の合計=%d\n",sum);

	printf("値の平均=%f\n",(float)sum/10.0);
	return 0;	
}