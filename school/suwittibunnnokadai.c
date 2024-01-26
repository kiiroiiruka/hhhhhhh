#include <stdio.h>
int main(void)
{
	char mozi;
	int suuzi;
	printf("学科文字を一字入力してください。\n");
	scanf("%d",&suuzi);
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
	
	switch (suuzi){
	case 1:
		printf("1は電子機械化科です");
		break;
	case 2:
		printf("2は情報技術科です");
		break;
	case 3:
		printf("3はデザイン科です");
		break;
	case 4:
		printf("4は総合ビジネス科です");
		break;
	case 5:
		printf("5は服飾デザイン科です");
	    break;
	case 6:
		printf("6は食物調理科です");
		break;
	default:
    printf("");
		}
	return 0;
}
}