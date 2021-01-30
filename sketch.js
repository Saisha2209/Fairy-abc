var fairy,fairyImage,star,starImage;
var music;
var canvas;
var fairy1;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine,world;
function preload()
{
fairyImage=loadAnimation("fairy1.png","fairy2.png")
starImage=loadImage("star.png")
music=loadSound("JoyMusic.mp3")
fairy1=loadAnimation("fairy.png")
}

function setup() {

  canvas=createCanvas(800, 750);
 
  
  //star.scale=0.5
  engine=Engine.create();
  world=engine.world;
  //star=Bodies.circle(200,200,10,bounce)
 // fairy=Bodies.rectangle(100,500,100,100);
 star=Bodies.circle(650,30,5,options);
  World.add(world,fairy)
 //World.add(world,ball)
 fairy=createSprite(100,500,100,100)
 fairy.addAnimation("flying",fairy1)
 fairy.scale=0.2
 //star=createSprite(680,120,30,30)
 star.addImage("star",starImage)
  
}


function draw() {
  background("black");
  console.info(World.mouseY,"   ",World.mouseX)
drawSprites();
if (keyWentDown("RIGHT_ARROW")){
  fairy.velocityX=3;
  fairy.addAnimation("fly in the sky",fairyImage)
  fairy.changeAnimation("fly in the sky",fairyImage)
}
if (keyWentDown("LEFT_ARROW")){
  fairy.velocityX=-3;
  fairy.addAnimation("fly in the sky",fairyImage)
  fairy.changeAnimation("fly in the sky",fairyImage)
}
if (keyWentDown("DOWN_ARROW")){
  star.velocityY=7;
}

}
