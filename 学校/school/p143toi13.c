#include <stdio.h>
int main(void)
{
	int kazu, n = 0,sum = 0;
	printf("�������(-1�ŏI��)=>");
	scanf("%d",&kazu);
	while(kazu !=-1){
		n++;
		sum = sum + kazu;
		printf("�������(-1�ŏI��)=>");
		printf("%d�̐��̕���%5.2f\n",n,(float) sum / (float)n);
		printf("�������(-1�ŏI��)=>");
		scanf("%d",&kazu);
	
	}
	printf("���� = %5.2f\n",(float) sum / (float)n);
	return 0;
}