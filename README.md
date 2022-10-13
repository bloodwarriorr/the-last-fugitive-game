# The Last Fugitive Game


Your goal is to cross the labyrinth,while avoiding from smart enemies,and obstacle on the road.

## In order to play, identify within 2 options:
1) Sign up as a user,provide email and password,unique nickname, gender (save all your progress,ability to edit profile,extra strikes benefit).
2) Sign up as a guest-No details required (save all your progress, but can't edit profile,start with less strikes).

## How to play:
Tap on a bracket (mobile),you can move 1 step each turn.


## Rules
You can't walk towards a bracket if it contains an obstacle
If you walk through a bracket which is near to an enemy(1 bracket from him), He will eat you and you will loss
You have 5 strikes for a registered user, 3 for guest.

#You can use the hint button, to make the best step towards the exit(BFS Algorithm to solve labyrinth).

## How is it works:

Map is a 2 dimensional grid-conatins clear brackets,obstacles,enemies.
Game is rendering with Window.requestAnimationFrame() functions,which request from the browser to repaint, inside useLayoutEffect hook.
(render the map consistently-game engine)
enemies are made up of major amount of .png assets, inside a JSON format.
with css, we use animate properties to change between assets-thats how the enemies and the player looks dynamically moving.
While playing, an interval is running to fill strikes each 5 min.**(instead of ad watch for now)

**While the app go into background mode-a timeout is set to count time for 5 min(to know when your done playing and set the end date for game)
--used for game statistics(total play time)

## Point distribution- each level has it's rank:1-3 stars.


3 Stars:10 steps or less
2 Stars: 15 steps or less
1 Star: above 15 steps.

#With each level cleared, a new level will be opened. **you can rate your level popularity from 0-5 after clearing a level.

##User profile section:


You can click on the avatar icon in order to change photo-choose from 3 photos, and change your nickname





# Created By Kenar Ben Shitrit & Ori Winboim © 




