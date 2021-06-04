const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;
var dropArr = [];
var maxDrops = 100;
var random;

function preload() {
    lightning1 = loadImage('lightning1.png')
    lightning2 = loadImage('lightning2.png')
    lightning3 = loadImage('lightning3.png')
    lightning4 = loadImage('lightning4.png')
    lightning5 = loadImage('lightning5.png')
}

function setup() {
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(250, 400);

    for (var i = 0; i < maxDrops; i++) {
       /*  var dropx = random(100, 500);
        var dropy = random(100, 500);
        console.log("dropx: " + dropx + " dropy: " + dropy) */
        dropArr.push(new Drop(random(100, 500), random(100, 500)));
    }
}

function draw() {
    background(255, 255, 255);

    Engine.update(engine);

    umbrella.display();

    for (var i = 0; i < maxDrops; i++) {
        dropArr[i].display();
        dropArr[i].updateY();
    }

    random = Math.round(Math.random(1, 5));

    if (frameCount % 150 === 0) {
        lightning = createSprite(Math.random(100, 400), Math.random(100, 400))
        switch (random) {
            case 1: lightning.addImage(lightning1)
                break;
            case 2: lightning.addImage(lightning2)
                break;
            case 3: lightning.addImage(lightning3)
                break;
            case 4: lightning.addImage(lightning4)
                break;
            case 5: lightning.addImage(lightning5)
                break;
            default: break;
        }
    }
    if (frameCount % 162 === 0 && lightning) {
        lightning.destroy();
    }
}

