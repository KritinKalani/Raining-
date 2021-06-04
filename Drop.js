class Drop {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.001,
            restitution:0.1  
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.image = loadImage("Drop.jpg")
        World.add(world, this.body);
    }

    updateY() {
        if (this.body.position.y > height) {
             var dropx = Math.round(random(100, 450));
            var dropy = Math.round(random(100, 450));
            console.log("dropx: " + dropx + " dropy: " + dropy) 
            Matter.Body.setPosition(this.body, {x:dropx, y:dropy})
        }
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 30, 30);
    }
}