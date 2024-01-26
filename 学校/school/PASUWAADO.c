#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(void)
{
	char dat[9];
	int i;
	
	srand((unsigned int)time(NULL));
	for(i=0;i<8;i++)
	{
		switch(rand()%3){
			case 0:
				dat[i]=(char)(rand()%10+0x30);
				break;
			case 1:
				dat[i]=(char)(rand()%27+0x40);
				break;
			case 2:
				dat[i]=(char)(rand()%27+0x60);
				break;
		}
	}
	dat[8]='\0';

	printf("%s\n",&dat[0]);
	return 0;
}