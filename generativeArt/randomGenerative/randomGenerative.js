function setup() {
  createCanvas(800, 800);
  background(0);
}


function draw() {
  //randomly choose shape
  let shapeChoice = floor(random(2));
  
  //random positions, sizes, and colors
  let x = random(width);
  let y = random(height);
  let s = random(20, 100);
  let sTwo = random(20, 100);
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
  fill(r, g, b, 150);
  noStroke();
  
  if (shapeChoice === 0) {
  ellipse(x, y, s, sTwo);
  } else {
    rect(x, y, s, sTwo);  
  }
}
