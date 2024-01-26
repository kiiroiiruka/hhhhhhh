#include <stdio.h>
int main(void)
{
	int kazu, n = 0,sum = 0;
	printf("”‚ð“ü—Í(-1‚ÅI—¹)=>");
	scanf("%d",&kazu);
	while(kazu !=-1){
		n++;
		sum = sum + kazu;
		printf("”‚ð“ü—Í(-1‚ÅI—¹)=>");
		printf("%dŒÂ‚Ì”‚Ì•½‹Ï%5.2f\n",n,(float) sum / (float)n);
		printf("”‚ð“ü—Í(-1‚ÅI—¹)=>");
		scanf("%d",&kazu);
	
	}
	printf("•½‹Ï = %5.2f\n",(float) sum / (float)n);
	return 0;
}