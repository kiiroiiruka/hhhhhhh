#include <stdio.h>
int main(void)
{
	float pai;
	int kaisu,bunbo,n;
	printf("�񐔁�");
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
	printf("�΁�%f\n",pai);
	return 0;
}