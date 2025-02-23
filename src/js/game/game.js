import { preload } from './preload.js'
import { Player } from './player.js'
import { input } from './inputs.js'

const render = {
    init(gameObj) {
        gameObj.tool.fillStyle = "lightblue"
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight)
        let player = gameObj.entities.player
        gameObj.tool.drawImage(
            player.sprite.img,
            player.sprite.srcX,
            player.sprite.srcY,
            player.sprite.srcW,
            player.sprite.srcH,
            player.posX,
            player.posY,
            player.W,
            player.H,
        )
    },
    update(gameObj) {
        gameObj.tool.clearRect(0, 0, window.innerWidth, window.innerHeight)
        gameObj.tool.fillStyle = "lightblue"
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight)
        let player = gameObj.entities.player
        gameObj.tool.drawImage(
            player.sprite.img,
            player.sprite.srcX,
            player.sprite.srcY,
            player.sprite.srcW,
            player.sprite.srcH,
            player.posX,
            player.posY,
            player.W,
            player.H,
        )
    }
}

class Game {
    init() {
        
        preload.preloadImg().then(()=>
        {    
            
            const canvas = document.querySelector(".board")
            canvas.height = window.innerHeight
            canvas.width = window.innerWidth
            const tool = canvas.getContext("2d")
            
            let entities = {
                player: null 
            }
            
            let gameObj = {
                tool,
                canvas,
                entities 
            }

            let player = new Player(preload.spriteSheetImage, 175, 175, 16*6, 19*6)
            gameObj.entities.player = player 
            render.init(gameObj)
            input.init()
            this.update(gameObj)
        })
    }

    update(gameObj) {
        const gameLoop = () => {
            input.update(gameObj);
            render.update(gameObj);
            requestAnimationFrame(gameLoop);
        };
        gameLoop();
    }

    reset() {
        location.reload()
    }
}

console.log("Game is running")
const game = new Game()
game.init()