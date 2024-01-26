#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void display()
{
	FILE *fp;
	char bango[5],name[13],naiyou[41];
	//int num=0;//b=0;//データの０行目
	//	char bbb[30];
	printf("┌──┬──────┬────────────────────┐\n");
	printf("│番号│お名前　　　│内容　　　　　　　　　　　　　　　　　　│\n");
	fp=fopen("bbs.txt","r");//ファイルのｂｂｓ。ｓないのDATEをこのプログラムに読み込む？rは確か読み込むだった気がする！
	while(fscanf(fp,"%4s%12s%40s",bango,name,naiyou)!=EOF)//読み込むデータだけ読み込めるように、最後まで来たら終わり？//////////////////////////////////////////////////////////////
	{
		//while(fgets(bbb,sizeof(bbb),fp)!=NULL)num++;

	//while(num != b)
	
	printf("├──┼──────┼────────────────────┤\n");
	//	fseek(fp,num * 56,SEEK_SET);//よみこむ場所を決める  （ー）　→　（＋）
								//fscanf(fp,"%4s%12s%40s",bango,name,naiyou);//読み込む
		if(strcmp(bango,"xxxx")!=0)
		{
		//	if(bango==bango2){fclose(fp);}
			printf("│%4.4s│%12.12s│%40.40s│\n",bango,name,naiyou);
			
		}
//	num++;
	
	}
	printf("└──┴──────┴────────────────────┘\n");
	
	//}
	fclose(fp);//読み込み終了
	//でーたがさいごまでおわったら
}