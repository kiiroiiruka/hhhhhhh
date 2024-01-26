#include<stdio.h>
int main(void)
{
	int data[]={100,200,300};
	int *p;
	p=&data[0];
	printf("%p %d\n",p,*p);
	p += 2;
	printf("%p %d\n",p,*p);
	p--;
	printf("%p %d\n",p,*p);
return 0;
}