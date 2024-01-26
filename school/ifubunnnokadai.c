#include <stdio.h>
void main()
{
	int ne;
	printf("”N—î‚ÍH\n");
	scanf("%d",&ne);
	if(ne<=3){
	printf("‚ ‚È‚½‚Ìƒ`ƒPƒbƒg‚Ì‰¿Ši‚Í‚O‰~‚Å‚·B");
	}else((ne>=4)&&(ne<=11)){
	printf("‚ ‚È‚½‚Ìƒ`ƒPƒbƒg‚Ì‰¿Ši‚Í‚T‚S‚O‚O‰~‚Å‚·B");
	}else((ne>=12)&&(ne<=65)){
	printf("‚ ‚È‚½‚Ìƒ`ƒPƒbƒg‚Ì‰¿Ši‚Í‚W‚Q‚O‚O‰~‚Å‚·B");
	}else(ne>=65){
	printf("‚ ‚È‚½‚Ìƒ`ƒPƒbƒg‰¿Ši‚Í‚V‚S‚O‚O‰~‚Å‚·B");
	}
}
	