#include <stdio.h>
void main()
{
	int ne;
	printf("年齢は？\n");
	scanf("%d",&ne);
	if(ne<=3){
	printf("あなたのチケットの価格は０円です。");
	}else((ne>=4)&&(ne<=11)){
	printf("あなたのチケットの価格は５４００円です。");
	}else((ne>=12)&&(ne<=65)){
	printf("あなたのチケットの価格は８２００円です。");
	}else(ne>=65){
	printf("あなたのチケット価格は７４００円です。");
	}
}
	