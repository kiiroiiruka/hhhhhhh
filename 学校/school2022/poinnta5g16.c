#include <stdio.h>
int strcnt(char*);
int main(void)
{
    char moji[128];
    printf("文字列：");
    gets(moji);
    printf("文字数は%d個でした。\n",strcnt(moji));
}
int strcnt(char *txt)
{
    char *p;
    int x=0;
    p=txt;
    while(*p != NULL)
    {
        p++;
        x++;
    }
    return x;
}