#include <stdio.h>
int main(void)
{
	int dat[10]={11,12,16,17,25,28,29,30,31,33};
	int j,key;
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
		printf("検索データー%d番目\n",j+1);
	}
	else{
		printf("検索データーなし\n");
	}
	return 0;
}
