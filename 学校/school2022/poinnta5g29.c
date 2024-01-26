#include <stdio.h>
int main(void)
{
    int i;
    char moji[30],*p;
    printf("──暗号作成──\n元の文字例を入力　：");
    p=&moji[0];
    scanf("%s",&moji[0]);
    printf("ずらす文字数入力　：");
    scanf("%d",&i);
    while(*p !='\0')
    {
        *p=*p+i;
        p++;
    }
    printf("作成された暗号文　：");
    printf("%s",&moji[0]);
     p=&moji[0];
     printf("\n──暗号解読──\n暗号文を入力　　　：");
      scanf("%s",&moji[0]);
     printf("ずらす文字数を入力：");
    scanf("%d",&i);
     while(*p !='\0')
    {
        *p=*p-i;
        p++;
    }
    printf("元の文字例を出力　：");
    printf("%s",&moji[0]);
     
    
    return 0;
}
