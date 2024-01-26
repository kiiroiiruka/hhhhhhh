#include <stdio.h>
int main (void)
{
	float yokin, ritsu;
	int nen;

	printf("—a‹àŠz=>");
	scanf("%f",&yokin);
	printf("—˜—¦iƒp[ƒZƒ“ƒgj=>");
	scanf("%f",&ritsu);
	for (nen=1; nen <=10; nen++)
		{
		yokin= yokin*((1.0+ritsu)/100.0);
		printf("%d”NŒã—a‹àŠzF%f\n",nen,yokin);
		}
	return 0;
}