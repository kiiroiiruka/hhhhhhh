#include<stdio.h>
#include<stdlib.h>
int main(void)
{
	int a,o,p,c=0,m=0;
		printf("����񂯂�����܂��傤�B\n5�񏟕��ˁB\n");
	for(p=0;p<5;p++)
	{
	
		srand((unsigned int)time(NULL));
		a=rand()%3+1;
		printf("����񂯂�c\n");
		printf("�����Ȃ��̎脟��������������������\n");
		printf("�b1�c�O�[�@�Q�c�`���L�@�R�c�p�[ ��\n");
		printf("����������������������������������\n");
		printf("�ǂ�ɂ���H:\n");
		printf("\n");
		scanf("%d",&o);
		
		a=rand()%3+1;
		switch (a){
				case 1:
					printf("�R���s���[�^;�O�[\n");
					break;
				case 2:
					printf("�R���s���[�^;�`���L\n");
					break;
				case 3:
					printf("�R���s���[�^;�p�[\n");
					break;
				default:
					return 0;
				}
			switch (o){	
				case 1:
					printf("�v���C���[;�O�[\n");
					break;
				case 2:
					printf("�v���C���[;�`���L\n");
					break;
				case 3:
					printf("�v���C���[;�p�[\n");
					break;
				default:
					return 0;
				}
		if(a==o)
		{
			printf("�A�C�R�ł��B\n");
		}
			else if((a-o==-1)||(a-o==2))
		{
			printf("���Ȃ��̕����ł�\n");
		m=m+1;
		}
			else 
		{
			printf("���Ȃ��̏����ł�\n");
		c=c+1;
		}	
	}
	printf("������%d��,�킽��%d��",c,m);
	
	return 0;
}
