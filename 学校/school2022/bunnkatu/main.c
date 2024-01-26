#include "origin.h"
void main(void)
{
char moji[100];
printf("文字を入力：");
scanf("%s",moji);
	if(moji[0]<97)
	{
        oomoji(moji);
printf("変換後：%s\n",moji);//出力
	}
	else
	{
	komoji(moji);
printf("変換後：%s\n",moji);//出力
	}
}