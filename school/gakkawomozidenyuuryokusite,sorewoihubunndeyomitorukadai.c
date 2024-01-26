#include <stdio.h>
int main(void)
{
	char a;
	printf("学科文字を一字入力してください。\n");
	scanf("%c",&a);
	if(a=='A')
			{
				printf("Aは電子機械化です");
								}
   else if(a=='C')
			{
				printf("Cは情報技術科です");
								}
   else if(a=='D')
			{
				printf("Dはデザイン科です");
								}
   else if(a=='E')
			{
				printf("Eは総合ビジネス科です");
	     							}
   else if(a=='G')
			{
				printf("Gは服飾デザイン科です");
								}
　else if(a=='H')
			{
				printf("Hは食物調理科です");
								}
      return 0;
}
