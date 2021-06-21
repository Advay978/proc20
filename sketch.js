
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadImage("images/cat1.png")
    catImg2 = loadImage("images/cat2.png")
    catImg3 = loadImage("images/cat3.png")
    mouseImg1 = loadImage("images/mouse1.png")
    mouseImg2 = loadImage("images/mouse2.png")
    mouseImg3 = loadImage("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,500);cat.addImage("catMoving",catImg1);cat.scale=0.1;
    mouse = createSprite(200,500);mouse.addImage("mouseNormal",mouseImg2);mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x===200){
          cat.velocityX=0
          mouse.addAnimation("happy",mouseImg1)
          mouse.changeAnimation("happy")
          cat.addAnimation("happy",catImg2)
          cat.changeAnimation("happy")
       }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg3)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
    cat.velocityX=-5
  }

}
