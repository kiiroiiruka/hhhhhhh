#include <stdio.h>
void main (void)
{
int i;
int data[5];
char text[5][128]={
	"����",
	"���w",
	"�Ȋw",
	"�p��",
	"�n��"};
	printf("���_�ǂ��łł���\n");
	for(i=0;i<5;i++)
{
		printf("%s",text[i]);
		scanf("%d",&data[i]);
	}
	printf("�܂Ƃ߂��\n");
	for(i=O;i<5;i++)
{
	printf("%s;%d�_\n",text[i],date[i])
}
}
