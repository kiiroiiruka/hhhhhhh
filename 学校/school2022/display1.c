#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void display()
{
	FILE *fp;
	char bango[5],name[13],naiyou[41];
	//int num=0;//b=0;//�f�[�^�̂O�s��
	//	char bbb[30];
	printf("����������������������������������������������������������������\n");
	printf("���ԍ��������O�@�@�@�����e�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@��\n");
	fp=fopen("bbs.txt","r");//�t�@�C���̂������B���Ȃ���DATE�����̃v���O�����ɓǂݍ��ށHr�͊m���ǂݍ��ނ������C������I
	while(fscanf(fp,"%4s%12s%40s",bango,name,naiyou)!=EOF)//�ǂݍ��ރf�[�^�����ǂݍ��߂�悤�ɁA�Ō�܂ŗ�����I���H//////////////////////////////////////////////////////////////
	{
		//while(fgets(bbb,sizeof(bbb),fp)!=NULL)num++;

	//while(num != b)
	
	printf("����������������������������������������������������������������\n");
	//	fseek(fp,num * 56,SEEK_SET);//��݂��ޏꏊ�����߂�  �i�[�j�@���@�i�{�j
								//fscanf(fp,"%4s%12s%40s",bango,name,naiyou);//�ǂݍ���
		if(strcmp(bango,"xxxx")!=0)
		{
		//	if(bango==bango2){fclose(fp);}
			printf("��%4.4s��%12.12s��%40.40s��\n",bango,name,naiyou);
			
		}
//	num++;
	
	}
	printf("����������������������������������������������������������������\n");
	
	//}
	fclose(fp);//�ǂݍ��ݏI��
	//�Ł[�����������܂ł��������
}