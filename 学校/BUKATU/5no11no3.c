#include <stdio.h>
int main(void)
{
	int a;
	printf("���̍��ɍs���ɂ͔N��ɂ���Ēl�i���ς��܂�");
	scanf("%d",&a);
	if(0<=a && a<=3){   						        //3
		printf("okokokokokokokok");
	}else if(a>3 && a<12){
		printf("���Ȃ��͂R�O�O�O�O�~�����Ė��̍��ɓ���Ȃ���");
	}else if(a>=12 && a<=17){
		printf("���Ȃ��͊댯�l���ł��T�O�O�O�O�O�O�O�O�~�����Ė��̍��ɓ����Ă��������B");//12saikara17sai
	}else if(a>=18){printf("�ɂイ���傤���Ȃ��łT�T�T�T�T�W�V�S�O�R�V�T�W�X�S�~�Ђ悤�ł�2");
	
}
 	return 0;
	}