#include <stdio.h>
int main(void)
{
    int i;
    char moji[30],*p;
    printf("�����Í��쐬����\n���̕��������́@�F");
    p=&moji[0];
    scanf("%s",&moji[0]);
    printf("���炷���������́@�F");
    scanf("%d",&i);
    while(*p !='\0')
    {
        *p=*p+i;
        p++;
    }
    printf("�쐬���ꂽ�Í����@�F");
    printf("%s",&moji[0]);
     p=&moji[0];
     printf("\n�����Í���Ǆ���\n�Í�������́@�@�@�F");
      scanf("%s",&moji[0]);
     printf("���炷����������́F");
    scanf("%d",&i);
     while(*p !='\0')
    {
        *p=*p-i;
        p++;
    }
    printf("���̕�������o�́@�F");
    printf("%s",&moji[0]);
     
    
    return 0;
}
