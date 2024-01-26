#include <stdio.h>
int main(void)
{
	int c;
	printf("‚ ‚È‚½‚Ì”N—î‚ð‹³‚¦‚Ä‚­‚¾‚³‚¢");
	scanf("%d",&c);
	if(c<=2)
	{
	printf("“üê‚·‚é‚É‚Í‚Q‚O‚O•K—v‚Å‚·");
	}
	else if(3<=c&&c<=10)
	{
	printf("“üê‚·‚é‚É‚Í‚ ‚È‚½‚Í‚T‚O‚O‰~•K—v‚Å‚·");
	}
	else if(11<=c&&c<=15)
	{
	printf("‚ ‚È‚½‚Í‚P‚O‚O‚O‰~•K—v‚Å‚·");
	}
	else if(16<=c)
	{
	printf("‚ ‚È‚½‚Í‚P‚T‚O‚O‰~•K—v‚Å‚·");
	}
	return 0;
}