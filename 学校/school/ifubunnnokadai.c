#include <stdio.h>
void main()
{
	int ne;
	printf("�N��́H\n");
	scanf("%d",&ne);
	if(ne<=3){
	printf("���Ȃ��̃`�P�b�g�̉��i�͂O�~�ł��B");
	}else((ne>=4)&&(ne<=11)){
	printf("���Ȃ��̃`�P�b�g�̉��i�͂T�S�O�O�~�ł��B");
	}else((ne>=12)&&(ne<=65)){
	printf("���Ȃ��̃`�P�b�g�̉��i�͂W�Q�O�O�~�ł��B");
	}else(ne>=65){
	printf("���Ȃ��̃`�P�b�g���i�͂V�S�O�O�~�ł��B");
	}
}
	