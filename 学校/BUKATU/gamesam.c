#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <stdlib.h>
int main()
{
	int x,y,px=2,py=2;
	char key;
	char map[5][6]={"22222",
					"20002",
					"20102",
					"20002",
					"22222"};
	while(key!='q'){
	system("cls");
	for(y=0;y<5;y++){
		for(x=0;x<5;x++){
			switch(map[y][x]){
				case '0':
				printf("@");
				break;
				case '1':
				printf("ò");
				break;
				case '2':
				printf("óÇ");
				break;
			}
		}printf("\n");
	}
	key = getch();
	if(key=='w'){
		map[py-1][px]='1';
		map[py][px]='0';
		py--;
	}
	if(key=='s'){
		map[py+1][px]='1';
		map[py][px]='0';
		py++;
	}
	if(key=='a'){
		map[py][px-1]='1';
		map[py][px]='0';
		px--;
	}
	if(key=='d'){
		map[py][px+1]='1';
		map[py][px]='0';
		px++;
	}




	
	}
	return 0;
}
