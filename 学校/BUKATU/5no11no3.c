#include <stdio.h>
int main(void)
{
	int a;
	printf("夢の国に行くには年齢によって値段が変わります");
	scanf("%d",&a);
	if(0<=a && a<=3){   						        //3
		printf("okokokokokokokok");
	}else if(a>3 && a<12){
		printf("あなたは３００００円払って夢の国に入りなさい");
	}else if(a>=12 && a<=17){
		printf("あなたは危険人物です５００００００００円払って夢の国に入ってください。");//12saikara17sai
	}else if(a>=18){printf("にゅうじょうしないで５５５５５８７４０３７５８９４円ひつようです2");
	
}
 	return 0;
	}