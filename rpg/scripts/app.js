// RPG javascript

//global variables
var charachterName;
// var map = require("./map.js")
const grass = new Image()
grass.src = "rpgTile019.png"

canvasSize = 512

const heroBody = new Image()
heroBody.src = "charSheet.png"
xLoc = 200
yLoc = 200
/*
TODO:

//render background map.
// background map can be stored in seperate file as an object, each item on map is its own object in a part of the map. - oooooor have a  dynamicaly created/added map which adds stuff like lakes and shit as the explorer moves...damn that would be cool

1. new game handler
2. game state handler
3. button handler
4. death handler
5. combat handler
6. hero handler
7. baddie handler
8. loot generator

*/



function gameStateHandler(){
    drawMap()
    //if there is no char name, it must be a new game.  Prompt user for name
    // if (!charachterName){
    //     charachterName = prompt("Please enter charachter name", "Frodo");
    //     hero = createChar(charachterName);
    // }
    



}

function drawMap(){

    const canvas = document.querySelector("#hud")
    var ctx = canvas.getContext("2d")
    movePlayer()
    grass.onload = () => {
        for(i = 0; i <= canvasSize; i += 64){
            for (n = 0; n <= canvasSize; n += 64){
                // console.log ("i: "+i + " n: "+n)
                ctx.drawImage(grass, i, n, 64, 64)
            }
        }
        
    }
    heroBody.onload = () => {
        ctx.drawImage(heroBody, 0, 119, 16, 16, xLoc, yLoc, 32, 32)
    }
    
    // ctx.fillStyle = 'rgb(120, 50, 10)';
    // ctx.fillRect(0, 0, 600, 600);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.fillRect(30, 30, 50, 50);
}

function movePlayer(){
    moveUp = addEventListener("keydown",function(e){
        
        if (e.keyCode === 119||e.keyCode === 87){
            console.log("keypress: " + e.keyCode)
            yLoc = yLoc - 1
        }
        
    })
}

function buttonHandler (){
    

}

function createChar(charName){
    //initializes hero charachter for first play
    var newHero = {
        name: charName,
        hp: 100,
        alive: true,
        level: 1,
        exp: 0,
        weapon: {
            name: "fists",
            dmgMod: 0,


        },
        armor: {
            name: "none",
            armorMod: 0
        }
        
    }
    return newHero;
}
window.onload = gameStateHandler();