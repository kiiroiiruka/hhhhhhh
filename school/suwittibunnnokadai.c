#include <stdio.h>
int main(void)
{
	char mozi;
	int suuzi;
	printf("�w�ȕ������ꎚ���͂��Ă��������B\n");
	scanf("%d",&suuzi);
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
	
	switch (suuzi){
	case 1:
		printf("1�͓d�q�@�B���Ȃł�");
		break;
	case 2:
		printf("2�͏��Z�p�Ȃł�");
		break;
	case 3:
		printf("3�̓f�U�C���Ȃł�");
		break;
	case 4:
		printf("4�͑����r�W�l�X�Ȃł�");
		break;
	case 5:
		printf("5�͕����f�U�C���Ȃł�");
	    break;
	case 6:
		printf("6�͐H�������Ȃł�");
		break;
	default:
    printf("");
		}
	return 0;
}
}