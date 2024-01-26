#include <stdio.h>
void main(void)
{
	char msg[]="NEWYORK";
	char *p;
	p= &msg[0];
	*(p+2) ='D';
	*p	='O';
	*(p+1)='L';
	printf("%s\n",&msg[0]);
}