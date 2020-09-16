var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;  
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameObject1 = createSprite (100,100,50,50);
gameObject1.shapeColor  = "green";
gameObject2 = createSprite (200,200,50,50);
gameObject2.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "orange";
  gameObject1.shapeColor  = "orange";
  
}
 else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor  = "green";
 }
  drawSprites();
}
function isTouching (object1,object2){
  if(object1.x-object2.x<object2.width/2 + object1.width/2 && 
    object2.x-object1.x<object2.width/2 + object1.width/2 &&
    object1.y-object2.y<object2.height/2 + object1.height/2 && 
    object2.y-object1.y<object2.height/2 + object1.height/2  ){
      return true
  }
else{
  return false 
}
}