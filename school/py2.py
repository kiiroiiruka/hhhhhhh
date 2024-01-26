import pgzrun
import random

WIDTH = 640
HEIGHT = 480

shooter = Actor('shooter',center=(30,HEIGHT/2))

enemy = Actor('enemy',center=(WIDTH-30,HEIGHT/2))

shots =[]
enemys =[]

gamecount = 0

def draw():
    
    screen.clear()
    shooter.draw()

    for enemy in enemys:
        enemy.draw()

    for i,obj in enumerate(enemys):
        screen.draw.text(str(i),(obj.x+30,obj.y))
        
    for shot in shots:
        shot.draw()
        
    for i,obj in enumerate(shots):
        screen.draw.text(str(i),(obj.x ,obj.y))
        
def update():

    global gamecount

    if keyboard.up:
        shooter.y -= 5
        
    if keyboard.up:
        shooter.y += 5

        for enemy in enemys:
            enemy.x -= 5
            
        for shot in shots:
            shot.x += 5

    gamecount += 1
    
    if gamecount%30==0:
        
        enemys.append(Actor('enemy',center=(WIDTH+30,random.randrange(HEIGHT))))
def on key down(key):
    
    if key == keys.SPACE:
        shots.append(Actor('shot',center=(shooter.x,shooter.y)))
        
pgzrun.go()

    
    


        


