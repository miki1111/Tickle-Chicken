var message = "tickle",
  font,
  minX,minY,maxX,maxY;
  x=350, y=200; // x and y coordinates of the text

function setup() {
  createCanvas(700, 400);
}

function draw() {
  // instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  background(255);
  fill(204, 120);
  chicken(x, y);
  maxX = x + 80;
  maxY = y + 80;
  minX = x - 80;
  minY = y - 80;

  // write the text in black and get its bounding box
  fill(0);


  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= minX && mouseX <= maxX &&
    mouseY >= minY && mouseY <= maxY) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}

function chicken(x, y) {
  
  stroke(0);
  
  //Plate Outside Rim
  fill(50, 0, 100, 120);
  ellipse(x+10, y+25, 200, 100);
  
  //Plate Inside Rim
  fill(250, 80, 80, 100);
  ellipse(x+10, y+25, 150, 70);
  
  //Chicken
  fill(200, 90, 0);
  ellipse(x, y, 130, 90);
  
   //Chicken Bone
  fill(255, 255, 255);
  rect(x+50, y+12, 40, 10)
  
  //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(x+90, y+12, 15);
  
   //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(x+90, y+20, 15);
  
  //Chicken Leg
  fill(200, 90, 0);
  ellipse(x+50, y+15, 50, 40);
}