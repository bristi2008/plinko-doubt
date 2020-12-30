const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

  ground = new Ground(240,790,480,20);

  
  
}

function draw() {
  background("black");  
  
  
  ground.display();

  for(var k = 0; k<=width; k = k + 80){
    divisions.push( new Division(k, height-divisionHeight/2, 10, divisionHeight))
    divisions[k].display();
  }

  

  
  for(var j = 40; j<=width; j = j + 50 ){
    plinkos.push(new Plinko(j,75))
    plinkos[j].display();
  }
  
 
  drawSprites();
}