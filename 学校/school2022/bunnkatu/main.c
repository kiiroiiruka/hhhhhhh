#include "origin.h"
void main(void)
{
char moji[100];
printf("��������́F");
scanf("%s",moji);
	if(moji[0]<97)
	{
        oomoji(moji);
printf("�ϊ���F%s\n",moji);//�o��
	}
	else
	{
	komoji(moji);
printf("�ϊ���F%s\n",moji);//�o��
	}
}