#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void display()
{
	FILE *fp;
	char bango[4],name[12],naiyou[40];
	int num=0;//データの０行目
	printf("┌──┬──────┬────────────────────┐\n");
	printf("│番号│お名前　　　│内容　　　　　　　　　　　　　　　　　　│\n");
	printf("├──┼──────┼────────────────────┤\n");
	fp=fopen("bbs.s","r");//ファイルのｂｂｓ。ｓないのDATEをこのプログラムに読み込む？rは確か読み込むだった気がする！
	while(fp != '\0')//読み込むデータだけ読み込めるように、最後まで来たら終わり？//////////////////////////////////////////////////////////////
	{
		fseek(fp,num * 56L,SEEK_SET);//よみこむ場所を決める  （ー）　→　（＋）
		fscanf(fp,"%4s%12s%40s",bango,name,naiyou);//読み込む
		system("cls");//画面消去
		if(strcmp(bango,"＊＊＊＊")!=0)
		{
			printf("│%4s│%12s│%40s│\n",bango,name,naiyou);
			printf("├──┼──────┼────────────────────┤\n");//表示
		}
		num++;
	}
	fclose(fp);//読み込み終了
	printf("└──┴──────┴────────────────────┘\n");//でーたがさいごまでおわったら
}