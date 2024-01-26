char *oomoji(char *oomoji)
{
char *p;
p=oomoji;
while(*p!='\0')
{
*p+=32;
p++;
}
return oomoji;
}