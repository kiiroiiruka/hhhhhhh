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
	printf("�R�s�[��=%s\n",before);
	printf("�R�s�[��=%s\n",after);
	after[5]='\0';
	printf("null�����=%s\n",after);
return 0;
}
