#include <stdio.h>
int main(void)
{
	int kazu, n = 2,sum = 0;
	printf("科目1の点数は?(-1で終了)=");
	scanf("%d",&kazu);
	if(kazu==-1){
		return 0;
		}
	while(kazu !=-1){
		sum = sum + kazu;
		printf("科目%dの点数は?(-1で終了)=",n);
		scanf("%d",&kazu);
		n++;
	}
	printf("%d科目の合計は%d点\n",n-2,sum);
	printf("平均は%5.2f点です。\n",(float) sum / (float)(n-2));
	return 0;
}
