var background;
var submarine;
var coin;
var bomb;
var score=0;
var coinGroup;
var gameOver;
var BombGroup;


function preload(){
  backgroundImg=loadImage("assets/background.png");
  submarineImg=loadImage("assets/submarine2.png");
  coinImg=loadImage("assets/coin.png");
  bombImg=loadImage("assets/bomb.png");
  gameOverImg = loadImage("assets/gameOver.png");
}


function setup() 
{
  createCanvas(windowWidth,windowHeight);


  coinGroup =  createGroup();
  BombGroup =  createGroup(bomb);

  background=createSprite(200,200);
  background.addImage(backgroundImg);
  

  submarine=createSprite(200,200);
  submarine.addImage(submarineImg);
  submarine.scale=0.2;

 

}

function draw() 
{
  drawSprites();
  if(coinGroup.isTouching(submarine)){
    score=score+1;
    coinGroup.destroyEach()
  }
  if(BombGroup.isTouching(submarine)){
    submarine.destroy();
    background.x=0;
    gameOver=createSprite(500,200);
    gameOver.addImage(gameOverImg);
    gameOver.scale=0.2;
    BombGroup.destroyEach();

  }
  if(World.frameCount%100===0){
    coin=createSprite(1000,200);
    coin.addImage(coinImg);
    coin.scale=0.2;
    coin.velocityX=-20;
    coin.y=Math.round(random(200,600,500,600));

    coinGroup.add(coin);

  }

  if(World.frameCount%300===0){
    bomb=createSprite(2000,500);
    bomb.addImage(bombImg);
    bomb.scale=0.2;
    bomb.y=Math.round(random(400,500));
    bomb.velocityX=-30;
    BombGroup.add(bomb);
  }
  fill("yellow");
  textSize(20);
  text("Press Up And Down Keys To Control The Submarine",260,50);
  text("Press Space Key To Control The Background",260,80);
  text("SCORE:"+score,50,50);
  if(background.x<0){
    background.x=background.width/2;
  }
  
  if(keyDown("space")){
    background.x=background.x-7;
  }
  if(keyDown("up")){
    submarine.y=submarine.y+-4;
  }
  if(keyDown("down")){
    submarine.y=submarine.y+5;
  }
 
}

 

