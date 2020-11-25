var FixedRec
var MovingRec

function setup() {
  createCanvas(800,400);
 FixedRec= createSprite (200,200,80,30);
 Movingrec= createSprite (600,200,50,80);

 FixedRec.shapeColor = "green";
 MovingRec.shapeColor = "green";

 FixedRec.debug = true;
 MovingRec.debug = true;
}

function draw() {
  background(0);  


  MovingRec.x= World.mouseX
  MovingRec.y=World.mouseY

  if (MovingRec.x-FixedRec.x < MovingRec.width/2 + FixedRec.width/2
    && FixedRec.x-MovingRec.x < MovingRec.width/2 + FixedRec.width/2
    && MovingRec.y-FixedRec.y < MovingRec.height/2 + FixedRec.height/2
    && FixedRec.y-MovingRec.y < MovingRec.height/2 + FixedRec.height/2 )
   {
    FixedRec.shapeColor = "red";
    MovingRec.shapeColor = "red";
   }
  else{
    FixedRec.shapeColor = "green";
    MovingRec.shapeColor = "green";
  }

  drawSprites();



}