#include <stdio.h>
int main()
{
	int q;
	char a[500];

	printf("キーボードで文字を入力\n");
	scanf("%s",a);
	printf("あなたが入力した文字は%sですね\n",a);

	printf("キーボードで整数を入力\n");
	scanf("%d",&q);
	printf("あなたが入力した文字は%dですね\n",q);

	return 0;
}
