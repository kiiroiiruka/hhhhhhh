#include<stdio.h>
int main(void)
{
	int num[]={1,2,3,4,5},*p,i,sum;
	p=&num[0];
	
	printf("��������������������������\n");
	printf("��address ���l���ϐ���	��\n");
	printf("��������������������������\n");
	for(i=0;i<5;i++)
	{
		*p += 10;
		printf("��%p��%d��num[%d]  ��\n",p,*p,i);
		p++;
	}
	printf("��������������������������");

return 0;
}



	
