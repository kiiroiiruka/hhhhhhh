#include<stdio.h>
char *mojicat(char *,char *);
void main(void)
{	

	printf("�����ぁ%s\n",mojicat("NIIZA","SOUGOU"));//moji�P�̒��ɂ��錋�����ꂽNIIZASOUGOU���o��
}
char *mojicat(char *moji1,char *moji2)
{
	char *	l= moji1;
		while(!(*moji1=='\0')) moji1++;//����ւ���ꏊ�܂Ń|�C���^�������Ă�
		while(!(*moji2=='\0'))
			{
				*moji1=*moji2;//
				moji2++;
				moji1++;
			}
			*moji1='\0';//1��U�������o�Ȃ��悤��
return l;//moji1�̒l��Ԃ�
}