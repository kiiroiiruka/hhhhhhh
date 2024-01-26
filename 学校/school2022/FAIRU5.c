void main(void)
{
	FILE *fp;
	char jyu[500],de[500],sityo[500],na[500],ji[500],syo[1024],ryoukinn[10240],setumei[10240],url[1024];
	char key[500];
	int i,n;
	float ox=0.0;
	fp = fopen("201602kanko.csv","r");
	printf("市町村名を漢字で入力？：");
	scanf("%s",key);
	while(	fscanf(fp,"%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%s\n",na,sityo,jyu,setumei,de,ji,syo,ryoukinn,url) != EOF){	
		if(strstr(sityo,key) !=  '\0'){
			n = strlen(setumei);
			if(n <= 60) ox++;
			else{
				ox = n / 60.0;
				if( (ox - ceil(ox)) != 0.0) ox++;
			}
			strcat(sityo,jyu);
			printf("┌───┬───────────────────────────────┐\n");
			printf("│観光地│%-60.60s  │\n",na);
			printf("├───┼───────────────────────────────┤\n");
			printf("│ 住所 │%-60.60s  │\n",sityo);
			printf("├───┼───────────────┬───────────────┤\n");
			printf("│ 営業 │%-30.30s│%-30.30s│\n",ji,syo);
			printf("├───┼───────────────┴───────────────┤\n");
			printf("│ 料金 │%-60.60s  │\n",ryoukinn);
			printf("├───┼───────────────────────────────┤\n");
			printf("│ＵＲＬ│%-60.60s  │\n",url);
			printf("├───┼───────────────────────────────┤\n");
			for(i=0;i<=ox;i++){
				if(setumei[60 * i] != '\0'){
				if(i==0) printf("│ 説明 │");
				else printf("│      │");
				printf("%-60.60s　│\n",&setumei[60 * i]);
			}	
			}
			printf("└───┴───────────────────────────────┘\n");
		}
	}
	fclose(fp);
}
