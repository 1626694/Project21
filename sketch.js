var fixedRect, movingRect;
var virtualobject_1,virtualobject_2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
  virtualobject_1=createSprite(200,100,20,20)
  virtualobject_1.shapeColor="purple";
  virtualobject_2=createSprite(200,800,20,20);
  virtualobject_2.shapeColor="yellow";
  virtualobject_1.velocityY=6;
  virtualobject_2.velocityY=-5;
}

function draw() {
  background(0,0,0);  
BounceOff(virtualobject_1,virtualobject_2);
  BounceOff(movingRect,fixedRect);
  drawSprites();
}
