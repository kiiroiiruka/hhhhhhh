#include <stdio.h>
void main()
{
	int ne;
	char an;
	printf("年齢は？\n");
	scanf("%d",&ne);
	if((ne<=0)||(ne>=120))
	{
		printf("正しく年齢を入力してください");
	}
	else if(ne<=3)
	{
		printf("あなたのチケットの価格は0円です。\n");
	}
	else if((ne>=4)&&(ne<=11))
	{
		printf("あなたのチケットの価格は5400円です。\n");
	}
	
	else if(ne==12)
	{
		printf("小学生ですか？ y or n \n");

	fflush(stdin);
	scanf("%c",&an);
	if (an=='y')
	{
		printf("あなたのチケットの価格は5400円です。");
	}
	else if(an=='n')
	{
		printf("あなたのチケットの価格は8400円です");
	}
		}
	else if((ne>=13)&&(ne<=64))
	{
		printf("あなたのチケットの価格は8200円です。\n");
	}
	else if(ne>=65)
	{
		printf("あなたのチケット価格は7400円です。\n");
	}
}
