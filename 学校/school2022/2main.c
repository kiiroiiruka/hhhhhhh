#include "swap_header.h"
extern int a,b;//extern宣言はたぶんグローバス変数を様々なところで使えるようにするためかな？
void main(void)
{

	input();//数字入力用
	swap(&a,&b);//AとBの中身を変換するプログラム
	display();//AとBを表示するプログラム
}