#include <stdio.h>
int main(void)
{

	float mozi;
	printf("�w�ȕ������ꎚ���͂��Ă��������B\n");
	scanf("%c",&mozi);
	switch (mozi){
	case 'A':
		printf("A�͓d�q�@�B���Ȃł�");
		break;
	case 'C':
		printf("C�͏��Z�p�Ȃł�");
		break;
	case 'D':
		printf("D�̓f�U�C���Ȃł�");
		break;
	case 'E':
		printf("E�͑����r�W�l�X�Ȃł�");
		break;
	case 'G':
		printf("G�͕����f�U�C���Ȃł�");
	    break;
	case 'H':
		printf("H�͐H�������Ȃł�");
		break;
	default:
	

	printf("%c�̊w�Ȃ͂���܂���",mozi);

			
		}
	return 0;
}
