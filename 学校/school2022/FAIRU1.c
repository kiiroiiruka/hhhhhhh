#include<stdio.h>
int main(void)
{
	FILE *fp;
	char name1[20];
	char name2[20];	
	char pref[20];
	char birth[20];
	fp = fopen("seiza.txt","r");

	fscanf(fp,"%[^,],%[^,],%[^,]%s",name1,name2,pref,birth);
	
	printf("%s\n",name1);
	printf("%s\n",name2);
	printf("%s\n",pref);
	printf("%s\n",birth);
	fclose(fp);
	return 0;
}