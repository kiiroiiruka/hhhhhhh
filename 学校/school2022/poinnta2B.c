#include <stdio.h>
void s(char*);//�v���g�^�C�v�錾
void main(void)
{
    char moji[128];
    printf("������F");
    gets(moji);
    printf("�t�ɂ����");
	s(moji);
}
void s(char *g)//�擪�A�h���X�����ɓn�����
{
    char *p;
    int x=0;
    p=g;
    while(*p != NULL)
    {
        p++;
        x++;
    }
	p--;
	while(x!=0)
	{
		printf("%c",*p);
		p--;
		x--;
	}
}

