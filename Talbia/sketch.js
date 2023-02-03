
let img; 
let writing;

function setup() {
  createCanvas(1300, 1600); // illustration is large to I need a bigger canvas 
   img = loadImage('image.jpg'); //illustration i created 
   writing = loadImage('text.jpg'); // text illustration appears 
   
}

function draw() {
 
  if (mouseIsPressed) { //GUI element, press to change illustration back and forth
    background(255);
    writing.resize(800,700); //height width of text
    image(writing, 220, 100); //text position

  mousePressed();

  } else{ //back to first illustration when mouse is let go 
    image(img, 250, 30); //image of initial illustration
  }
  function mousePressed(){
 // textSize(32);
  //rectMode(CENTER); initial idea for text, did not work out well so opted out 
  //text('hello', width/2, height/2);
  //fill(0, 102, 153);
  
  }
}
