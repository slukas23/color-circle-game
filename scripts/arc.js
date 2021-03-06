class Arc {
    constructor(start, stop, color) {
        this.x = 0
        this.y = 0
        this.w = 250
        this.h = 250
        this.velocity = 0
        this.start = start
        this.stop = stop
        this.color = color
    }

    setup() {}

    draw() {
        push()
        angleMode(DEGREES)
        this.y -= this.velocity
        fill(this.color)
        strokeWeight(0)
        stroke(this.color)
        arc(this.x, this.y, this.w, this.h, this.start, this.stop)
        pop()
    }
}
