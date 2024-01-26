#include<stdio.h>
#include<string.h>
void disp(char *);
void main(void)
{
	char name1[10];
	char name[10]={'\0'};
	scanf("%s",name1);
	strncpy(name,name1,4);
	disp(name);
	
}
	void disp(char *name)
	{printf("%s",name);}
