#include<stdio.h>
#include<string.h>
#include <math.h>
void main(void)
{
	FILE *fp;
	int x=0,y,zz=0;
	char ni[512],kannkouti[1024],a1[1024],z[1024],setumei[5096],a2[1024],eigyou[1024],eigyoubi[1024],ryoukinn[1024],url[1024],*po;
	po=&setumei[0];
	fp = fopen("201602kanko.csv","r");
	printf("�s�������������œ��́H   :");
	scanf("%s",ni);
	while( fscanf(fp,"%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%s\n",kannkouti,a1,z,setumei,a2,eigyou,eigyoubi,ryoukinn,url) != EOF)
	{
		if(strstr(a1,ni)){
		
			strcat(a1,z);
			printf("������������������������������������������������������������������������\n");		//3 20
			printf("���ό��n��%-60.60s��\n",kannkouti);		//3 20
			printf("������������������������������������������������������������������������\n");		//3 20
			printf("���Z�@����%-60.60s��\n",a1);		//3 20
			printf("������������������������������������������������������������������������\n");		//3 20
			printf("���c�@�Ƅ�%-26.26s��%-32.32s��\n",eigyou,eigyoubi);		//�@�E|��NULL���������邩��
			printf("������������������������������������������������������������������������\n");		//3 20
			printf("�����@����%-60.59s��\n",ryoukinn);		//3 20				
			printf("�������������������������������������\����������������������������������\n");
			printf("��U R L ��%-60.60s��\n",url);		//3 20
			printf("������������������������������������������������������������������������\n");
			while(*po != NULL)
			{
				x++;
				po++;
			}
				y = x / 60 + 1;
			while(zz < y)
			{
					if(zz==0) 	printf("�����@����");
					else printf("���@�@�@��");
					printf("%-60.60s�b\n",&setumei[60*zz]);
					zz++;
			}
			printf("������������������������������������������������������������������������\n");
			zz=0;
			x=0;
			po=&setumei[0];
		
		}
	}
	fclose(fp);
}





	//if( (y - ceil(y)) != 0.0) y++; //�J�艺�����J��グ

/*	while(*po != NULL)
			{
				printf("%c",*po);
				x++;
				po=po+2;
				if(x>59){
					printf("��");
					printf("\n���@�@�@��");
					x=0;
				}
			}
				while(x<60)
				{
					printf(" ");
					x++;
				}
				printf("��");
				printf("\n������������������������������������������������������������������������\n");
		
		}
	
			
		

			
	






			/*if(x>60)
			{
			while(x>60)
				for(x=0;x<60;x++)
				{
						tenp=setumei[x];
						setumei[x]=setumei[60+x];
						setumei[60+x]=tenp;
					while()
					{
				printf("���@�@�@��%-60.60s�b\n",setumei);
					}
				}
			}*/
		//	while (setumei[x] != NULL)x++;
		//	setumei[x]=NULL;
		//	while(x>=60){
		//	x=x-60;
		//	setumei[x]=NULL;
		//	y++;
		//printf("���@�@�@��%-60.60s�b\n",setumei[1+(60*y)]);
		//while(setumei[x] != NULL)
		//	{
		//		if(x==60)
		//		{
		//		printf("���@�@�@��%-60.60s�b\n",setumei[1+(60*y)]);
		//		y++;
		//		x=x-60;
		//		}
		//	x++;
		//	}
		
	
			//3 20
		