#include <stdio.h>
int main(void)
{
	char a;
	char before[81];
	char after[81];
	int i,m;
		printf("入力");
	scanf("%80s",&before[0]);
	for(i=0;i<81;i++)
	{
		m=81-i;
		before[i]= before[m];
		m=0;
	}
	for(i=0;i<81;i++)
	{
		after[i] = before[i];
	}
	printf("コピー元=%s\n",before);
	printf("コピー先=%s\n",after);
return 0;
}
