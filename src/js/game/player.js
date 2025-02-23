class Sprite 
{
    constructor(img, srcX, srcY, srcW, srcH){
        this.img = img
        this.srcX = srcX
        this.srcY = srcY
        this.srcH = srcH
        this.srcW = srcW

    }
}

class Entity{
    constructor(sprite, type, posX, posY, W, H){
        this.sprite = sprite
        this.type = type
        this.posX = posX
        this.posY = posY
        this.W = W
        this.H = H
    }
}

class Player{
    constructor(spriteSheet, posX, posY, W, H){
        this.sprite = sprite
        this.posX = posX
        this.posY = posY
        this.W = W
        this.H = H
    }
}