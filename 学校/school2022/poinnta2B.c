#include <stdio.h>
void s(char*);//プロトタイプ宣言
void main(void)
{
    char moji[128];
    printf("文字列：");
    gets(moji);
    printf("逆にすると");
	s(moji);
}
void s(char *g)//先頭アドレスがｇに渡される
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

