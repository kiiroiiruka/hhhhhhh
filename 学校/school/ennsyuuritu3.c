#include <stdio.h>
int main(void)
{
	float pai;
	int kaisu,bunbo,n;
	printf("‰ñ”");
	scanf("%d",&kaisu);
	
	pai=0;
	bunbo=1;
	for(n=1;n<=kaisu;n++){
	if(n%2==0){
	pai=pai-(1.0/bunbo);
	}else{
	pai=pai+(1.0/bunbo);
	}
	bunbo=bunbo+2;
	}
	pai=pai*4;
	printf("ƒÎ%f\n",pai);
	return 0;
}