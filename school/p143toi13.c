#include <stdio.h>
int main(void)
{
	int kazu, n = 0,sum = 0;
	printf("数を入力(-1で終了)=>");
	scanf("%d",&kazu);
	while(kazu !=-1){
		n++;
		sum = sum + kazu;
		printf("数を入力(-1で終了)=>");
		printf("%d個の数の平均%5.2f\n",n,(float) sum / (float)n);
		printf("数を入力(-1で終了)=>");
		scanf("%d",&kazu);
	
	}
	printf("平均 = %5.2f\n",(float) sum / (float)n);
	return 0;
}