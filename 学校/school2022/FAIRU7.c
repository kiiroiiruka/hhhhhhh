#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void disp(char *,char *,char *,char *,char *,char *);
void main(void)
{
	FILE *fp;
	char bango[5],name[11],sei[3],birth[11],money[7],busho[4];//��name[11]5�����ǂݍ��߂�悤�ɂ���ꍇ
	char get;
	if((fp=fopen("shain.txt","a")) == NULL )
	{
		printf("�t�@�C�����J���܂���I\n");
		exit(1);
	}
	while(1)//�������[�v
	{
	printf("�y�Ј��o�^�z�I���F�ԍ�=9999");
	printf("�ԍ�(���p�S��)�F");
	scanf("%s",bango);
	if(strcmp(bango,"9999")==0)
	{
		fclose(fp);
		break;
	}
	//�X�X�X�X�����͂��ꂽ��E�o
	printf("����(�S�p�S��)�F");
	scanf("%s",name);
	printf("��(�S�p�P��)�F");
	scanf("%s",sei);
	printf("���N����(�P�O��)�F");
	scanf("%s",birth);
	printf("���^(���p�U��)�F");
	scanf("%s",money);
	printf("����(���p�R��)�F");
	scanf("%s",busho);
	fprintf(fp,"%4s%8.8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	printf("\n�[�[�o�^���܂����[�[\n");
	disp(bango,name,sei,birth,money,busho);
	}
}
void disp(char *bango,char *name,char *sei,char *birth,char *money,char *busho)
{
		printf("������������������������������������������������\n");
		printf("���ԍ��������@�@���������N�����@�����^�@��������\n");
		printf("������������������������������������������������\n");
		printf("��%4s��%8.8s��%2s��%10s��%6s��%4s��\n",bango,name,sei,birth,money,busho);
		printf("������������������������������������������������\n");
		
}


		
/*		printf("�y�Ј��o�^�z�I���F�ԍ���9999");
		printf("�@ �ԍ�(���p4��)�F");
		while(get != '9999')
		{	
			get = getch(); //scanf�݂����Ȃ�B�ł������͎̂��s��ʂɂ͕\�����Ȃ�
			if(get == 0x32) num++;
			if(get == 0x38) num--;
			fseek(fp,num * 33,SEEK_SET);
			fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
			system("cls");
			printf("�y�Ј��o�^�z���F[2]�A�O�F[8]\n");
			disp(bango,name,sei,birth,money,busho);
		}
	fclose(fp);*/

/* https://monozukuri-c.com/langc-file-write/#toc11	*/	
/* http://www.isc.meiji.ac.jp/~re00079/EX2.2011/20110622.html */