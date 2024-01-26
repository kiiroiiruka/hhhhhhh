#include<stdio.h>
int main(void)
{
	int u,o;
	char i[30],k[30],*p,*pp;
	printf("ˆÃ†ì¬\n");
	printf("‚à‚Æ‚Ì•¶š—ñ‚ğ“ü—Í");
	scanf("%s",&k[0]);
	printf("‚¸‚ç‚·•¶š”‚ğ“ü—Í");
	scanf("%d",&u);
	p=&k[0];
	while(*p!='\0')
	{
		*p+=u;//’†g
		p++;//êŠ“®‚©‚·
	}
	printf("%s,"k);
return 0;
}