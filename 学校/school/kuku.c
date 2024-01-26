#include <stdio.h>
int main(void)
{
	int kazu,dann;
	for(dann=1;dann<10;dann++)
		{
			for(kazu=1;kazu<10;kazu++)
				{
					printf("%3d",kazu*dann);
				}
			printf("\n");
		}
	return 0;
		
}