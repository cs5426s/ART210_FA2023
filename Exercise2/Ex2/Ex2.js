let img;

function preload() {
  img = loadImage('data/mouse.png');
}

function setup() {
  createCanvas(img.width, img.height);
  background(170, 50, 10);
  //img.resize(400, 400);
  image(img, 0, 0);
  
//text
  fill(0);
  textSize(32);
  text('Your Text Here', 10, 50);
}


function draw() {

}
