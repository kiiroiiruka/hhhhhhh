#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void disp(char *,char *,char *,char *,char *,char *);
void main(void)
{
	FILE *fp;
	char bango[5],name[11],sei[3],birth[11],money[7],busho[4];//←name[11]5桁も読み込めるようにする場合
	char get;
	if((fp=fopen("shain.txt","a")) == NULL )
	{
		printf("ファイルが開けません！\n");
		exit(1);
	}
	while(1)//無限ループ
	{
	printf("【社員登録】終了：番号=9999");
	printf("番号(半角４桁)：");
	scanf("%s",bango);
	if(strcmp(bango,"9999")==0)
	{
		fclose(fp);
		break;
	}
	//９９９９が入力されたら脱出
	printf("氏名(全角４桁)：");
	scanf("%s",name);
	printf("性(全角１桁)：");
	scanf("%s",sei);
	printf("生年月日(１０桁)：");
	scanf("%s",birth);
	printf("給与(半角６桁)：");
	scanf("%s",money);
	printf("部署(半角３桁)：");
	scanf("%s",busho);
	fprintf(fp,"%4s%8.8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	printf("\nーー登録しましたーー\n");
	disp(bango,name,sei,birth,money,busho);
	}
}
void disp(char *bango,char *name,char *sei,char *birth,char *money,char *busho)
{
		printf("┌──┬────┬─┬─────┬───┬──┐\n");
		printf("│番号│氏名　　│性│生年月日　│給与　│部署│\n");
		printf("├──┼────┼─┼─────┼───┼──┤\n");
		printf("│%4s│%8.8s│%2s│%10s│%6s│%4s│\n",bango,name,sei,birth,money,busho);
		printf("└──┴────┴─┴─────┴───┴──┘\n");
		
}


		
/*		printf("【社員登録】終了：番号＝9999");
		printf("　 番号(半角4桁)：");
		while(get != '9999')
		{	
			get = getch(); //scanfみたいなやつ。打ったものは実行画面には表示しない
			if(get == 0x32) num++;
			if(get == 0x38) num--;
			fseek(fp,num * 33,SEEK_SET);
			fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
			system("cls");
			printf("【社員登録】次：[2]、前：[8]\n");
			disp(bango,name,sei,birth,money,busho);
		}
	fclose(fp);*/

/* https://monozukuri-c.com/langc-file-write/#toc11	*/	
/* http://www.isc.meiji.ac.jp/~re00079/EX2.2011/20110622.html */