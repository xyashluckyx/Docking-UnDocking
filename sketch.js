var backgroundImg;
var iss, issImg;
var spacecraft, spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4;
var hasDocked=false;
var PLAY=0;
var END=1;
var gameState=PLAY;

function preload(){
  backgroundImg=loadImage("images/images/spacebg.jpg");

  issImg=loadImage("images/images/iss.png");

  spacecraftImg1=loadAnimation("images/images/spacecraft1.png");

  spacecraftImg2=loadAnimation("images/images/spacecraft2.png");

  spacecraftImg3=loadAnimation("images/images/spacecraft3.png");

  spacecraftImg4=loadAnimation("images/images/spacecraft4.png");

}

function setup() {
  createCanvas(800,700);
  spacecraft=createSprite(random(200,500),600,10,10);
  spacecraft.addAnimation("running",spacecraftImg1);
  spacecraft.scale=0.4;
  //spacecraft.debug=true
  spacecraft.setCollider("rectangle",0,-130,350, 400);

  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  //iss.debug=true
  iss.setCollider("rectangle",-70,20,30, 30);


}

function draw() {
  background(backgroundImg);

  if(!hasDocked){
    
    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-2;
      spacecraft.addAnimation("running",spacecraftImg3);
      spacecraft.scale=0.4;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+2;
      spacecraft.addAnimation("running",spacecraftImg4);
      spacecraft.scale=0.4;
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-2;
      
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addAnimation("running",spacecraftImg2);
      spacecraft.scale=0.4;
    }
  }
  if(iss.isTouching(spacecraft)){
    hasDocked=true  
    textSize(40);
    text("Docking Successful",350, 650);
   }


  drawSprites();
}