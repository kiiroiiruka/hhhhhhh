#include <stdio.h>
int main(void)
{
	int kokugo,suugaku,eigo,syakai,rika,goukei;
	float heikinn;
	printf("����̓_��=");
	scanf("%6d",&kokugo);
	printf("���w�̓_��=");
	scanf("%6d",&suugaku);
	printf("�p��̓_��=");
	scanf("%6d",&eigo);
	printf("�Љ�̓_��=");
	scanf("%6d",&syakai);
	printf("���Ȃ̓_��=");
	scanf("%6d",&rika);
	goukei=kokugo+suugaku+eigo+syakai+rika;
	heikinn=goukei/5.0;
	printf("����������������\n");
	printf("���l�����_�ꗗ��\n");
	printf("����������������\n");
	printf("�����ꄠ%6d��\n",kokugo);
	printf("����������������\n");
	printf("�����w��%6d��\n",suugaku);
	printf("����������������\n");
	printf("���p�ꄠ%6d��\n",eigo);
	printf("����������������\n");
	printf("���Љ%6d��\n",syakai);
	printf("����������������\n");
	printf("�����Ȅ�%6d��\n",rika);
	printf("����������������\n");
	printf("�����v��%6d��\n",goukei);
	printf("����������������\n");
	printf("�����τ�%6.2f��\n",heikinn);
	printf("����������������\n");
	return 0;
}
