let rat;

function preload() {
  rat = loadImage('data/mouse.png');
}

function setup() {
  createCanvas(rat.width, rat.height);

//for my bricks  
  background(170, 50, 10);
  strokeWeight(3);
  line(40, 0, 40, 80);
  line(200, 0, 200, 80);
  line(400, 0, 400, 80);
  line(0, 80, 500, 80);
  line(150, 80, 150, 160);
  line(350, 80, 350, 160);
  line(500, 80, 500, 160);
  line(0, 160, 500, 160);
  line(40, 160, 40, 240);
  line(200, 160, 200, 240);
  line(400, 160, 400, 240);
  line(0, 240, 500, 240);
  line(150, 240, 150, 320);
  line(350, 240, 350, 320);
  line(500, 240, 500, 320);
  line(0, 320, 500, 320);
  line(40, 320, 40, 380);
  line(200, 320, 200, 380);
  line(400, 320, 400, 380);

}

function mousePressed() {
  
  background(170, 50, 10);
  strokeWeight(3);
  line(40, 0, 40, 80);
  line(200, 0, 200, 80);
  line(400, 0, 400, 80);
  line(0, 80, 500, 80);
  line(150, 80, 150, 160);
  line(350, 80, 350, 160);
  line(500, 80, 500, 160);
  line(0, 160, 500, 160);
  line(40, 160, 40, 240);
  line(200, 160, 200, 240);
  line(400, 160, 400, 240);
  line(0, 240, 500, 240);
  line(150, 240, 150, 320);
  line(350, 240, 350, 320);
  line(500, 240, 500, 320);
  line(0, 320, 500, 320);
  line(40, 320, 40, 380);
  line(200, 320, 200, 380);
  line(400, 320, 400, 380);
  
  rat.resize(200, 180);
  let x = random(0, width - rat.width/2);
  let y = random(0, height - rat.height/2);
  image(rat, x, y);
  
  //text
  fill(255);
  textSize(32);
  text("You've Rata'd Your Last Touille", 10, 50);
}
