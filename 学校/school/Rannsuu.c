#include<stdio.h>
#include<stdlib.h>
int main(void)
{
	int a,o,p,c=0,m=0;
		printf("じゃんけんをしましょう。\n5回勝負ね。\n");
	for(p=0;p<5;p++)
	{
	
		srand((unsigned int)time(NULL));
		a=rand()%3+1;
		printf("じゃんけん…\n");
		printf("┌あなたの手──────────┐\n");
		printf("｜1…グー　２…チョキ　３…パー │\n");
		printf("└───────────────┘\n");
		printf("どれにする？:\n");
		printf("\n");
		scanf("%d",&o);
		
		a=rand()%3+1;
		switch (a){
				case 1:
					printf("コンピュータ;グー\n");
					break;
				case 2:
					printf("コンピュータ;チョキ\n");
					break;
				case 3:
					printf("コンピュータ;パー\n");
					break;
				default:
					return 0;
				}
			switch (o){	
				case 1:
					printf("プレイヤー;グー\n");
					break;
				case 2:
					printf("プレイヤー;チョキ\n");
					break;
				case 3:
					printf("プレイヤー;パー\n");
					break;
				default:
					return 0;
				}
		if(a==o)
		{
			printf("アイコです。\n");
		}
			else if((a-o==-1)||(a-o==2))
		{
			printf("あなたの負けです\n");
		m=m+1;
		}
			else 
		{
			printf("あなたの勝ちです\n");
		c=c+1;
		}	
	}
	printf("勝ち数%d回,わたし%d回",c,m);
	
	return 0;
}
