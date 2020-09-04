const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;
var dropArr = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(500,500);
   umbrella = new Umbrella(250,400);
   for(var i = 0; i<maxDrops; i++){
    dropArr.push(new Drop(random(0,500),random(0,500)));
   }
}

function draw(){
    background(255,255,255);
    Engine.update(engine)
    umbrella.display();
    for(var i = 0; i<dropArr.length; i++){
        dropArr[i].display();
        dropArr[i].update();
    }
}   

