#include<stdio.h>
#include<stdlib.h>
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
	printf("───検索───");
	printf("社員番号：");
	scanf("%d",&num);
	fseek(fp,--num * 33L,SEEK_SET);
	scanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	disp(bango,name,sei,birth,money,busho);
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

		
		printf("【社員登録】終了：番号＝9999");
		printf("　 番号(半角4桁)：");
		while(get != '9999')
		{
			
			get = getch();
			if(get == 0x32) num++;
			if(get == 0x38) num--;
			fseek-
		}
/* https://monozukuri-c.com/langc-file-write/#toc11	*/	