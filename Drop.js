class Drop {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.1
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.image = loadImage("Drop.jpg")
        World.add(world, this.body);
    }

    update() {
        if (this.body.position.y > 500) {
            Matter.Body.setPosition(this.body, { x: random(0, 500), y: random(0, 500) })
        }
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 30, 30);
    }
}