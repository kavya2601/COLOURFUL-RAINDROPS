const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drop = [];

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0; i < 2000; i = i + 10){
  drop[i] = new Drops();
  }  
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  for(var i = 0; i < 2000; i = i + 10){
    drop[i].draw();
    drop[i].update();
  } 

  }


