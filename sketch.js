
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground, groundImage;
var bg, bgImage;
var banana, bananaImage;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
  
  groundImage = loadImage("load.png");
  
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(65,375);
  monkey.addAnimation( "monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  monkey.scale = 0.1;   
  
  ground = createSprite(600,400,600,5);
  ground.shapeColor = "black";
  //ground.addImage("ground", groundImage);
  ground.x = ground.width /2;
  //ground.height = 5;
 //ground.width = 600;
  
  obstacleGroup = new Group();
  FoodGroup =  new Group();
  
  
  
}


function draw() {

  background("black");
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
    
  }
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(FoodGroup.isTouching(monkey)) {
    
    score = score + 1;
    FoodGroup.destroyEach();
    
  }
  
  if(obstacleGroup.isTouching(monkey)){
    
    monkey.velocityX = 0;
    ground.velocityX = -5;
    FoodGroup.destroyEach();
    
    
  }
  
  
  ground.velocityX = -5;
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  Food();
  Obstacle();
  
  drawSprites();
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivalTime, 100, 50, fill("black"), stroke("gold"), textSize(20));
  
  text("Score: " + score, 500, 50,  fill("black"), stroke("gold"),  textSize(20));
  
}

function Food(){
     if(frameCount % 80 === 0 ){
  banana = createSprite(300,200,50,50);
  banana.addImage("banana", bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 100;
       
  FoodGroup.add(banana);
}
}

function Obstacle(){
  
  if(frameCount % 250 === 0){
    
    obstacle = createSprite(600,375);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    
    obstacle.scale = 0.2;
    
    obstacleGroup.add(obstacle);
    
  }
  
}






