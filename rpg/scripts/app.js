// RPG javascript

//global variables
var charachterName;
var hero;

window.onload = gameStateHandler();
/*
TODO:

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
    //if there is no char name, it must be a new game.  Prompt user for name
    if (!charachterName){
        charachterName = prompt("Please enter charachter name", "Frodo");
        hero = createChar(charachterName);
    }
    


    console.log(hero);
}

function buttonHandler (){
    

}

function createChar(charName){
    //initializes hero charachter for first play
    var newHero = {
        name: charName,
        hp: 100,
        alive: true;
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