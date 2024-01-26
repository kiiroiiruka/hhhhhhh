bunnkatu2.exe: 2main.obj swap.obj  display.obj input.obj
	bcc32 -ebunnkatu2.exe 2main.obj swap.obj display.obj input.obj
	2main.obj  : 2main.c
		  bcc32 -c 2main.c
	swap.obj   : swap.c
	  	  bcc32 -c swap.c
	display.obj: display.c
		  bcc32 -c display.c
	swap.obj   : input.c
		  bcc32 -c input.c
clean:
  del *.obj *.tds