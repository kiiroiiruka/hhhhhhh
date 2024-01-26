bunnkatu1.exe : main.obj komoji.obj oomoji.obj 
	bcc32 -ebunnkatu1.exe main.obj komoji.obj oomoji.obj
main.obj : main.c
	bcc32 -c main.c
komoji.obj : komoji.c
	bcc32 -c komoji.c
oomoji.obj : oomoji.c
	bcc32 -c oomoji.c
clean :
 del *.obj *.tds