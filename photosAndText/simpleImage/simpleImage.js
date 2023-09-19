let img;

function preload() {
  img = loadImage('data/hammer.png');
}

function setup() {
  createCanvas(img.width, img.height);
//  background(220);
  
  img.resize(200, 200);
  image(img, 0, 0);


//image cropping
  let croppedImg = img.get(0, 0, 200, 200);
  image(croppedImg, 250, 0);
  
  //img.resize(400, 400);
  //image(img, 0, 0);
  
}

function draw() {

  
  
} 
//tinting with the image in the draw function  
  
  //  background(220);
  
//  let tintVal = map(mouseX, 0, width, 0, 255);
//  tint(255, tintVal);
//  image(img, 0, 0);
  
//  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
//    fill(255, 0, 0);
//    textSize(24);
//    text('Hovering over image', img.width / 2, img.height / 2);
//  }
  
  //image(img, 0, 0);

  //text
  // fill(0);
  //textSize(32);
  //text('Your Text Here', 10, 50);
