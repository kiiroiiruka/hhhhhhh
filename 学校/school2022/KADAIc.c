#include<stdio.h>
int main(void)
{
	int u,o;
	char i[30],k[30],*p,*pp;
	printf("�Í��쐬\n");
	printf("���Ƃ̕���������");
	scanf("%s",&k[0]);
	printf("���炷�����������");
	scanf("%d",&u);
	p=&k[0];
	while(*p!='\0')
	{
		*p+=u;//���g
		p++;//�ꏊ������
	}
	printf("%s,"k);
return 0;
}