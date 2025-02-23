import { preload } from './preload.js'


const render = 
{
    init(gameObj){
        gameObj.tool.fillStyle = "lightblue"
        gameObj.tool.fillRect(0,0,
            window.innerWidth, window.innerHeight)
        
    }
}

class Game
{
    init(){
        const canvas = document.querySelector(".board")
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
        const tool = canvas.getContext("2d")

        let gameObj = {
            tool, canvas
        }
        render.init(gameObj)
    }
    run(){

    }
    reset(){
        location.reload()
    }
}
preload.preloadImg().then(function(){
    console.log(preload.castleImage)
    console.log("Game is running")
    const game = new Game()
    game.init()
})
