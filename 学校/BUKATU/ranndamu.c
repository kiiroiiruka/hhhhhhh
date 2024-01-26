#include <stdio.h>
#include <stdlib.h>
#include<time.h>
int main()
{
int GetRandom(int min,int max);



	int i;
	
	for (i = 0;i < 10;i++) {
		printf("%d\n",GetRandom(1,6));
	}
	
	return 0;
}

