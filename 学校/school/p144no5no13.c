#include <stdio.h>
int main (void)
{
	float yokin, ritsu;
	int nen;

	printf("�a���z=>");
	scanf("%f",&yokin);
	printf("�����i�p�[�Z���g�j=>");
	scanf("%f",&ritsu);
	for (nen=1; nen <=10; nen++)
		{
		yokin= yokin*((1.0+ritsu)/100.0);
		printf("%d�N��a���z�F%f\n",nen,yokin);
		}
	return 0;
}