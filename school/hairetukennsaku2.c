#include <stdio.h>
int main(void)
{
	int dat[10]={11,12,16,17,25,28,29,30,31,33};
	int j,key;
	int sum;
	printf("�����f�[�^�[ ");
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
		printf("�����f�[�^�[��%d�Ԗ�\n",j+1);
	}
	else{
		printf("�����f�[�^�[�Ȃ�\n");
	}
	sum=0;
	for(j=0;j<10;j++)
	{
			sum=sum+dat[j];
	}
	printf("�l�̍��v=%d\n",sum);

	printf("�l�̕���=%f\n",(float)sum/10.0);
	return 0;	
}