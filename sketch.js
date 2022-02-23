
var trex ,trex_running, ground, ground_movement;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
ground_movement = loadAnimation( "ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex spriterex
 trex=createSprite(50,150,5,5)
 ground = createSprite(300,175,600,5)
 trex.addAnimation("running",trex_running)
 ground.addAnimation("movement",ground_movement)
 ground.scale = 1
 trex.scale = 0.5
 
}

function draw(){
  background("white")
  if (keyDown("space")){
    trex.velocityY = -10 
  }
  // score= score +5 
  trex.velocityY = trex.velocityY + 0.8  
  trex.collide(ground) 
  drawSprites();
}
