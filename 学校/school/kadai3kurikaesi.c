#include <stdio.h>
int main(void)
{
	int kazu, n = 2,sum = 0;
	printf("�Ȗ�1�̓_����?(-1�ŏI��)=");
	scanf("%d",&kazu);
	if(kazu==-1){
		return 0;
		}
	while(kazu !=-1){
		sum = sum + kazu;
		printf("�Ȗ�%d�̓_����?(-1�ŏI��)=",n);
		scanf("%d",&kazu);
		n++;
	}
	printf("%d�Ȗڂ̍��v��%d�_\n",n-2,sum);
	printf("���ς�%5.2f�_�ł��B\n",(float) sum / (float)(n-2));
	return 0;
}
