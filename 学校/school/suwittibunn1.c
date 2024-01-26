#include <stdio.h>
int main(void)
{

	float mozi;
	printf("学科文字を一字入力してください。\n");
	scanf("%c",&mozi);
	switch (mozi){
	case 'A':
		printf("Aは電子機械化科です");
		break;
	case 'C':
		printf("Cは情報技術科です");
		break;
	case 'D':
		printf("Dはデザイン科です");
		break;
	case 'E':
		printf("Eは総合ビジネス科です");
		break;
	case 'G':
		printf("Gは服飾デザイン科です");
	    break;
	case 'H':
		printf("Hは食物調理科です");
		break;
	default:
	

	printf("%cの学科はありません",mozi);

			
		}
	return 0;
}
