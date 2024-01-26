#include<stdio.h>
int main(void)
{
	char dat[10][25]={
		"Yoshizawa Miyu",
		"Tsuyuki Mana",
		"Ikeuchi Atsushi",
		"Miyauchi Masashi",
		"Nakazawa Akari",
		"Kawada Karin",
		"Oda Sadayuki",
		"Hamada Manaka",
		"Sakai Hiroko",
		"Arita Aika",
	};
	char m;
	int k,l,i;
	for(k=0;k<9;k++)
	{
		for(l=k+1;l<10;l++)
		{
			if(dat[k][0] > dat[l][0])
			{
				for(i=0;i<25;i++){
					m=dat[k][i];
					dat[k][i]=dat[l][i];
					dat[l][i]=m;
				}
			}
		}
	}
	for(i=0;i<10;i++)printf("%s\n",&dat[i][0]);
return 0;
}