#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <stdlib.h>
void main(){
	int x,y,i,j;
	char fied[10][10]={{1,1,1,1,1,1,1,1,1,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,0,0,0,0,0,0,0,0,1},
					   {1,1,1,1,1,1,1,1,1,1}};
	char kb;
	x=4;
	y=4;
	while(1){
system("cls");
	for(i=0;i<10;i++){
	for(j=0;j<10;j++){
	if(j==y && i==x )printf("ò");
else if(fied[i][j]==1)printf("òó");
else if(fied[i][j]==0)printf("@");
}

printf("\n");
}
while(1){
	if(kbhit()){

	kb= getch();
		if(kb=='w'&&y>1){
			y--;
			break;
		}
	if(kb=='a'&&x>1){
			x--;
			break;
		}
		if(kb=='s'&&y<8){
			y++;
			break;
		}
	if(kb=='d'&&x<8){
			x++;
			break;
		}
}
}
}
}