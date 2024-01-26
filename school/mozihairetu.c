#include <stdio.h>
int main(void)
{
	char before[]="NIIZASOUGOU";
	char after[10];
	int i;
	for(i=0;i<11;i++)
	{
		after[i] = before[i];
	}
	printf("コピー元=%s\n",before);
	printf("コピー先=%s\n",after);
	after[5]='\0';
	printf("null代入後=%s\n",after);
return 0;
}
