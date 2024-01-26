#include <stdio.h>
int main(void)
{
	float a,b,c;
	 b=1.285;
	c=0.0;
	printf("---TAXI —¿‹àŒvŽZ---\n—˜—p‹——£‚ð[km]‚Å“ü—Í‚µ‚Ä‚Á‚­‚¾‚³‚¢\n");
	scanf("%f",&a);
	if (a<=1.284)
	{
		printf("‚²—˜—p—¿‹à‚Í420‰~‚Å‚·");
		}
	else if(a>=1.285)
		{
	while(b<a)
		{
		b=b+0.233;
	c++;
		}
		printf("‚²—¿‹à‚Í%f‰~‚Å‚·",420+(c*80));
	}
	return 0;
}
	