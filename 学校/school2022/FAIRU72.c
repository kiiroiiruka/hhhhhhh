#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
void disp(char *,char *,char *,char *,char *,char *);
void main(void)
{
	FILE *fp;
	char bango[5],name[9],sei[3],birth[11],money[7],busho[4];
	char get;
	int num=0;
	if((fp=fopen("shain.txt","r")) == NULL )
	{
		printf("�t�@�C�����J���܂���I\n");
		exit(1);
	}
	printf("�y�Ј������z���F[2]�A�O�F[8]\n");
	fseek(fp,num * 33L,SEEK_SET);
	fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	disp(bango,name,sei,birth,money,busho);
	while( get != '0')//�L�[�{�[�h�łO���͂���Ȃ��ԓ�������
	{
		get = getch();
		if(get == 0x32)num++;//�Q�@���@���R�[�h���P�i�߂�
		if(get == 0x38)num--;//�W�@�O�@���R�[�h���P������
	fseek(fp,num * 33L,SEEK_SET);
	fscanf(fp,"%4s%8s%2s%10s%6s%3s",bango,name,sei,birth,money,busho);
	system("cls");//��ʏ���
	printf("�y�Ј������z���F[2]�A�O�F[8]\n");
	disp(bango,name,sei,birth,money,busho);
	}
	fclose(fp);
}
	void disp(char *bango,char *name,char *sei,char *birth,char *money,char *busho)
{
		printf("������������������������������������������������\n");
		printf("���ԍ��������@�@���������N�����@�����^�@��������\n");
		printf("������������������������������������������������\n");
		printf("��%4s��%8s��%2s��%10s��%6s��%4s��\n",bango,name,sei,birth,money,busho);
		printf("������������������������������������������������\n");
}