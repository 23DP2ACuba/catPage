class Sprite {
    constructor(img, srcX, srcY, srcW, srcH) {
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
    }
}

class Entity {
    constructor(sprite, type, posX, posY, W, H) {
        this.sprite = sprite;
        this.type = type;
        this.posX = posX;
        this.posY = posY;
        this.W = W;
        this.H = H;
    }
}

class Player extends Entity {
    constructor(spriteSheet, posX, posY, W, H) {
        let img = new Sprite(spriteSheet, 650, 3, 17, 19);
        super(img, "player", posX, posY, W, H); 
        this.velX = 1.8
        
    }
}

export { Player };
