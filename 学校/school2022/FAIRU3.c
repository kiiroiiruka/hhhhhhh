#include<stdio.h>
#include<string.h>
int main(void)
{
	FILE *p;
	char sss[100];
	char t[100];
	char tt[100];
	char ttt[100];
//	int i=1;
	printf("住所(一部可)の一部を漢字で入力");
	scanf("%s",sss);
	p=fopen("202104papamama.csv","r");	
	while(fscanf(p,"%[^,],%[^,],%s",t,tt,ttt)!=EOF)
	{
			if(strstr(tt,sss)){printf("%d,%s,%s,%s",t,tt,ttt);}
	}


	fclose(p);








//	printf("住所(一部可)の一部を漢字で入力");
//	while(fgets(tt,1000,p) !=NULL)
//	{
//		printf("%s",tt);
//	}
//	printf("%s",tt);
//	fclose(p);

	


/*	┌──┬──────────────┐
	│	　│							│
　　├──┼──────────────
	│	　│
　　├──┼
	│	　│
　　├──┼
	│	　│
　　└──┴
*/
	
return 0;
}