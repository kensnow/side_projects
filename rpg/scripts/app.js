// RPG javascript

//global variables
var charachterName;
// var map = require("./map.js")
const grass = new Image()
grass.src = "rpgTile019.png"

canvasSize = 512

const heroBody = new Image()
heroBody.src = "charSheet.png"

//hero constructor
function Hero(name){
    this.name = name
    this.hp = 25
    this.mp = 5
    this.level = 1
    this.experience = 0
    this.nextLevel = 25
    this.skills = {}
    this.inventory = []
    this.equipment = {
        weapon: {},
        head: {},
        chest: {},
        legs: {},
        feet: {}
    }
    this.position = [200,200]
    this.isAlive = true
    this.baddiesKilled = 0
    this.attack = 1
    this.armor = 0
    this.attackSpeed = 3000
}

Hero.prototype.moveHero = function(){
    addEventListener("keydown",(e) => {
        if (e.keyCode === 87 || e.keyCode === 119){
            this.position[1]--
        } else if (e.keyCode === 65 || e.keyCode === 97){
            this.position[0]--
        } else if (e.keyCode === 68 || e.keyCode === 100){
            this.position[0]++
        } else if (e.keyCode === 83 || e.keyCode === 115){
            this.position[1]++
        }
        console.log (this.position)
        
    })
}




// heroName = prompt("Hero name?", "Frodo")
heroName = "Bob"
const hero = new Hero(heroName)
// hero.moveHero()


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
    setInterval(drawMap, 30)
    setInterval(clearMap, 30)
    //if there is no char name, it must be a new game.  Prompt user for name
    // if (!charachterName){
    //     charachterName = prompt("Please enter charachter name", "Frodo");
    //     hero = createChar(charachterName);
    // }
    



}

clearMap = function(){
    const canvas = document.querySelector("#hud")
    var ctx = canvas.getContext("2d")

    ctx.clearRect(0,0, canvas.height, canvas.width)
}

drawMap = function(){

    const canvas = document.querySelector("#hud")
    var ctx = canvas.getContext("2d")
    
    drawGrass(ctx);
    drawHero(ctx);
    // drawGrass = () => {
    //     for(i = 0; i <= canvasSize; i += 64){
    //         for (n = 0; n <= canvasSize; n += 64){
    //             // console.log ("i: "+i + " n: "+n)
    //             ctx.drawImage(grass, i, n, 64, 64)
    //         }
    //     }
        
    // }
  
    // ctx.fillStyle = 'rgb(120, 50, 10)';
    // ctx.fillRect(0, 0, 600, 600);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.fillRect(30, 30, 50, 50);
    // ctx.clearRect(0,0,600,600);
}

function drawGrass (ctx){
    for(i = 0; i <= canvasSize; i += 64){
        for (n = 0; n <= canvasSize; n += 64){
            // console.log ("i: "+i + " n: "+n)
            ctx.drawImage(grass, i, n, 64, 64)
        }
    }
}
function drawHero (ctx){
    console.log("Haroo!")
    ctx.drawImage(heroBody, 0, 119, 16, 16, hero.position[0], hero.position[1], 32, 32)

}
// function movePlayer(){

//     })
// }

    
window.onload = gameStateHandler();