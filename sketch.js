//Declare variable for background & backgroundImage
var bg,bgImage;
var player,player1,player2;


function preload()
{
  //Load allImages
  bgImage=loadImage("assets/bg.jpeg");
  player1=loadImage("assets/shooter_2.png");
  player2=loadImage("assets/shooter_3.png");
}

function setup() 
{
  //Create a Canvas which takes windowWidth & windowHeight
  createCanvas(windowWidth,windowHeight)
  //create sprite for the background than add the background image scale it if needed
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImage)
  bg.scale=1.1
  //create the player sprite,Add Image scale if needed
 player= createSprite(displayWidth-1150,displayHeight-300,50,50);
 player.addImage(player1)
 player.scale=0.3;
 player.debug=true;
 player.setCollider("rectangle",0,0,300,300);

}

function draw() 
{
  background(0); 

  //moving the player up and down 
  if(keyDown(UP_ARROW)){
    player.y=player.y-30
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+30
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
    player.addImage(player2)
  }

  //player goes back to original standing image once we stop pressing the space bar
 else if(keyWentUp("space")){
   player.addImage(player1)
 }

  //write code from P5.play.js to  display all object 
  drawSprites();
}
