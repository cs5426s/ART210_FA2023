//This is not complete

let mic;
let ripple = 0;
let targetRippleSize = 0;
let easing = 0.5;
let maxRippleSize = 1000;

function setup() {
  createCanvas(640, 480);
  background(255);
  
  //create audio input
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(255, 10);
  
  let vol = mic.getLevel();
  
  
  
  //draw base circle
  noFill();
  stroke(0);
  ellipse(width / 2, height / 2, 10, 10);
  
  //update an draw ripple
  ripple += rippleSpeed;
  if (ripple > maxRippleSize) ripple = 0;
  stroke(0, 102, 153);
  ellipse(width / 2, height / 2, 10 + ripple + vol * 500, 10 + ripple + vol * 500);
  
}

function mousePressed() {
  mic.start();
}
