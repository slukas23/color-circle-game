class Ball {
    constructor() {}

    setup() {
        this.x = 450
        this.y = 510
        this.w = 20
        this.h = 20
        this.velocity = 0
    }

    move() {
        this.velocity = 15
    }

    draw() {
        this.y -= this.velocity
        fill("#b4b4b4")
        strokeWeight(0)
        ellipse(this.x, this.y, this.w, this.h)
        if (this.y < 200) {
            this.velocity = 0
            this.x = 450
            this.y = 510
        }
    }
}
