#include <stdio.h>
int main(void)
{
	float a,b,c;
	 b=1.285;
	c=0.0;
	printf("---TAXI �����v�Z---\n���p������[km]�œ��͂��Ă���������\n");
	scanf("%f",&a);
	if (a<=1.284)
	{
		printf("�����p������420�~�ł�");
		}
	else if(a>=1.285)
		{
	while(b<a)
		{
		b=b+0.233;
	c++;
		}
		printf("��������%f�~�ł�",420+(c*80));
	}
	return 0;
}
	