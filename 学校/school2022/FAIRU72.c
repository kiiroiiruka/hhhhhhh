#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
void disp(char *,char *,char *,char *,char *,char *);
void main(void)
{
	FILE *fp;
	char bango[5],name[9],sei[3],birth[11],money[7],busho[4];
	char get;
	int num=0;
	if((fp=fopen("shain.txt","r")) == NULL )
	{
		printf("ファイルが開けません！\n");
		exit(1);
	}
	printf("【社員検索】次：[2]、前：[8]\n");
	fseek(fp,num * 33L,SEEK_SET);
	fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	disp(bango,name,sei,birth,money,busho);
	while( get != '0')//キーボードで０入力されない間動きつつける
	{
		get = getch();
		if(get == 0x32)num++;//２　次　レコードを１進める
		if(get == 0x38)num--;//８　前　レコードを１下げる
	fseek(fp,num * 33L,SEEK_SET);
	fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	system("cls");//画面消去
	printf("【社員検索】次：[2]、前：[8]\n");
	disp(bango,name,sei,birth,money,busho);
	}
	fclose(fp);
}
	void disp(char *bango,char *name,char *sei,char *birth,char *money,char *busho)
{
		printf("┌──┬────┬─┬─────┬───┬──┐\n");
		printf("│番号│氏名　　│性│生年月日　│給与　│部署│\n");
		printf("├──┼────┼─┼─────┼───┼──┤\n");
		printf("│%4s│%8s│%2s│%10s│%6s│%4s│\n",bango,name,sei,birth,money,busho);
		printf("└──┴────┴─┴─────┴───┴──┘\n");
}