export let input = {
    down: {},
    init() {
        window.addEventListener("keydown", (e) => {
            this.down[e.code] = true
        });

        window.addEventListener("keyup", (e) => {
            delete this.down[e.code]
        });
    },
    update(gameObj) {
        let player = gameObj.entities.player

        if (this.isDown("KeyA")) {
            player.posX -= player.velX
        }
        if (this.isDown("KeyD")) {
            player.posX += player.velX
        }
    },
    isDown(key) {
        return this.down[key]
    }
};