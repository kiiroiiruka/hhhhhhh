#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <stdlib.h>
int main(void)
{
	int x,y,px=10,py=5;
	char key;
	char map[12][7]={'1'1'1'1'1'1'1'1'1'1'1'1'
					 '1'0'0'0'0'0'0'0'0'0'0'1'
					 '1'0'0'0'0'0'0'0'0'0'0'1'
					 '1'0'0'0'0'0'0'0'0'0'0'1'
					 '1'0'0'0'0'1'1'1'1'1'1'1'
					 '1'0'0'0'0'0'0'0'0'0'2'1'
					 '1'1'1'1'1'1'1'1'1'1'1'1'};
	system("cls");
	for(x=0;x>12;x++){
	for(y=0;y>7;y++){
	switch(map[x][y]){
	case '0'
	printf("Å@");
	break;
	case '1'
	printf("Å°");
	break;
	case '2'
	printf("Åó");
	break;

}printf("\n")
}
	key = getch();
	if((key=='w')&&(5<=px<=11)||(py==5)||(py==1)){
	map[px][py]='2';
	}else
			{
	map[px][py-1]='2';
	map[px][py]='0';
	py--;
			}
	if((key=='a')&&(px==1)){
	map[px][py]='2';
	}else
			{
	map[px-1][py]='2';
	map[px][py]='0';
	px--;
			}
	if((key=='d')&&((px==4)&&(py==4))||(px==10)){
	map[px][py]='2';
	}else
			{
	map[px+1][py]='2';
	map[px][py]='0';
	px++;
}
	if((key=='s')&&((1<=px<=10)&&(py==5))||((py==3)&&(5<=px<=10)){
	map[px][py]='2';
	}else
{
	map[px][py+1]='2';
	map[px][py]='0';
	py++;
}



return 0;
}