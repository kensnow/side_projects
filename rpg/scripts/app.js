// RPG javascript

//global variables
var charachterName;


window.onload = gameStateHandler();
/*
TODO:

//render background map.
// background map can be stored in seperate file as an object, each item on map is its own object in a part of the map. - oooooor have a  dynamicaly created/added map which adds stuff like lskes and shit as the explorer moves...damn that would be cool

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
    


    console.log(hero);
}

function drawMap(){

    const canvas = document.querySelector("#hud")
    var ctx = canvas.getContext("2d")

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, 400, 400);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
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