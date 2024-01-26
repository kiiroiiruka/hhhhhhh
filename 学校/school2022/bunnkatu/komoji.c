char *komoji(char *komoji)
{
char *p;
p=komoji;
while(*p!='\0')
{
*p-=32;
p++;
}
return komoji;
}