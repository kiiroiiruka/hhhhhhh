import pgzrun

WIDTH=700
HEIGHT=490

map_data= [[1,0,1,2,0,0,0,1,2,0],
           [1,0,1,1,1,0,1,1,1,0],
           [1,0,0,0,0,0,0,0,0,0],
           [1,1,0,1,1,1,1,1,1,0],
           [2,0,0,1,0,0,0,1,1,2],
           [0,1,1,1,0,1,0,0,0,1],
           [0,0,0,0,0,1,2,1,0,0]]

location = [0,1]

floor=Actor('floor.png',topleft=(0,0))
player=Actor('player.png',topleft=(70,0))
box=Actor('box.png',topleft=(0,0))
coingold=Actor('coingold.png',topleft=(0,0))
exit =Actor('exit',topleft=(630,420))
getcoin=0
sounds.bgm.play(-1)
def draw():
        screen.clear()
        for y in range(7):
            for x in range(10):
                floor.topleft=(70*x,70*y)
                floor.draw()
                if map_data[y][x]==0:
                    floor.topleft=(70*x,70*y)
                    floor.draw()
                if map_data[y][x]==1:
                    box.topleft=(70*x,70*y)
                    box.draw()
                if map_data[y][x]==2:
                    coingold.topleft=(70*x,70*y)
                    coingold.draw()
                if map_data[y][x]==3:
                    exit.topleft=(70*x,70*y)
                    exit.draw()
        player.draw()
        screen.draw.text("COIN=" + str(getcoin),(0,450),owidth=1.5,ocolor='BLACK',color='YELLOW',fontsize=40)

def on_key_down(key):

            
    global getcoin
    
    if key ==keys.UP:
        if location[0]>=1:
            if map_data[location[0]-1][location[1]]!=1:
                location[0] -=1
                player.y -=70
    if key ==keys.DOWN:
        if location[0]<=5:
            if map_data[location[0]+1][location[1]]!=1:
                location[0] +=1
                player.y +=70
    if key ==keys.LEFT:
        if location[1]>=1:
            if map_data[location[0]][location[1]-1]!=1:
                location[1] -=1
                player.x -=70
    if key ==keys.RIGHT:
        if location[1]<=8:
            if map_data[location[0]][location[1]+1]!=1:
                location[1] +=1
                player.x +=70
    if map_data[location[0]][location[1]] == 2:
        getcoin +=1
        map_data[location[0]][location[1]]=0
    if getcoin==5:
        map_data[6][9] = 3
pgzrun.go()
