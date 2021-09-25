var snowimg, snow;
var character1, characterimg;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow = createSprite(400,200,800,400);
  snow.scale = 0.7;
  snow.addImage(snowimg)
  character1 = createSprite(200,300,30,50);
  character1.scale = 0.3;
  character1.addImage(characterimg)
}

function preload() {
snowimg = loadImage("snow2.jpg")
characterimg = loadImage("a.png")
}
function draw() {
  background(0);  

  if (keyDown("space")) {
    character1.velocityY = -4;
  }
  if (keyDown("left")) {
    character1.velocityX = -4;
  }
  if(keyDown("right")) {
    character1.velocityX = 4;
  }

  drawSprites();
}