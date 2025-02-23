export const preload = 
{
    castleImage: new Image(),
    cloudsImage: new Image(),
    mountainImage: new Image(),
    spriteSheetImage: new Image(),
    tilesetImage: new Image(),
  
    preloadImg() 
    {
      this.castleImage.src = "src/js/game/assets/sprites/castle.png"
      this.cloudsImage.src = "src/js/game/assets/sprites/clouds.png"
      this.mountainImage.src = "src/js/game/assets/sprites/mountain.png"
      this.spriteSheetImage.src = "src/js/game/assets/sprites/spritesheet.png"
      this.tilesetImage.src = "src/js/game/assets/sprites/tileset_gutter.png"
  
      return new Promise((resolve, reject) => {
        let p1 = new Promise((resolve, reject) => {
          this.castleImage.addEventListener("load", function () {
            console.log("castleImage loaded")
            resolve()
          })
        })
  
        let p2 = new Promise((resolve, reject) => {
          this.cloudsImage.addEventListener("load", function () {
            console.log("cloudsImage loaded")
            resolve()
          })
        })
  
        let p3 = new Promise((resolve, reject) => {
          this.mountainImage.addEventListener("load", function () {
            console.log("mountainImage loaded")
            resolve()
          })
        })
  
        let p4 = new Promise((resolve, reject) => {
          this.spriteSheetImage.addEventListener("load", function () {
            console.log("spriteSheetImage loaded")
            resolve()
          })
        })
  
        let p5 = new Promise((resolve, reject) => {
          this.tilesetImage.addEventListener("load", function () {
            console.log("tilesetImage loaded")
            resolve()
          })
        })
  
        Promise.all([p1, p2, p3, p4, p5]).then(function () {
          resolve()
        })
      })
    }
  }
  