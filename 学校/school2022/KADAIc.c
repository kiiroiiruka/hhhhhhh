#include<stdio.h>
int main(void)
{
	int u,o;
	char i[30],k[30],*p,*pp;
	printf("暗号作成\n");
	printf("もとの文字列を入力");
	scanf("%s",&k[0]);
	printf("ずらす文字数を入力");
	scanf("%d",&u);
	p=&k[0];
	while(*p!='\0')
	{
		*p+=u;//中身
		p++;//場所動かす
	}
	printf("%s,"k);
return 0;
}