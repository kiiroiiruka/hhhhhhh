#include<stdio.h>
int main(void)
{

	char a[50],c[50],*p,*l;
	printf("•¶š—ñ 1");
	scanf("%s",&a);
	p=&a[0];
	printf("•¶š—ñ 2");
	scanf("%s",&c);
	l=&c[0];
		while(!(*p=='\0')) p++;//“ü‚ê‘Ö‚¦‚éêŠ‚Ü‚Åƒ|ƒCƒ“ƒ^‚ğ‚Á‚Ä‚­
		while(!(*l=='\0'))
			{
				*p=*l;
				l++;
				p++;
			}
	printf("%s",&a[0]);
return 0;
}
