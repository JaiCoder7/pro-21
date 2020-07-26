
var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200, 200, thickness, height/2);

}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;

if(hasCollided(bullet,wall)){
bullet.velocityX=0;

var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);


if(deformation>10){
bullet.shapeColor=color("red");

}

if(deformation<10){

  bullet.shapeColor=color("green");
}

}



  drawSprites();
}



function hasCollided(bullet, wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;

}
else{

return false;


}

}


