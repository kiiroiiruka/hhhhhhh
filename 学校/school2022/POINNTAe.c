#include<stdio.h>
char *mojicat(char *,char *);
void main(void)
{	

	printf("結合後＝%s\n",mojicat("NIIZA","SOUGOU"));//moji１の中にある結合されたNIIZASOUGOUを出力
}
char *mojicat(char *moji1,char *moji2)
{
	char *	l= moji1;
		while(!(*moji1=='\0')) moji1++;//入れ替える場所までポインタを持ってく
		while(!(*moji2=='\0'))
			{
				*moji1=*moji2;//
				moji2++;
				moji1++;
			}
			*moji1='\0';//1個Uが多く出ないように
return l;//moji1の値を返す
}