#include <stdio.h>
int strcnt(char*);
int main(void)
{
    char moji[128];
    printf("•¶š—ñF");
    gets(moji);
    printf("•¶š”‚Í%dŒÂ‚Å‚µ‚½B\n",strcnt(moji));
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