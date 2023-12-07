let snowflakes = [];
let snowLayers = [];
let snowman;
let button;
let state = 0;
let buttonOutside;
let dog;

// My Fire Code
let particles = [];
let count = 1;
let slider;
// End of My Fire Code

function preload() {
  dog = loadImage('data/firePlaceDog.jpeg');
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1100, 900);
  snowman = new Snowman(width * 0.1, height * 0.95);

  button = createButton('Go Inside of the House? Click Here!');
  button.position(20, 80);
  button.mousePressed(goInsideHouse);

  buttonOutside = createButton('Go Back Outside');
  buttonOutside.position(20, 110);
  buttonOutside.mousePressed(goBackOutside);
  buttonOutside.hide();

  // Initialize slider here
  angleMode(DEGREES);
  slider = createSlider(5, 30, 10);
  slider.size(400);
  slider.position(530, height - 30);
  //slider.style('height', '200px'); // Adjust the height here
}

function draw() {
  if (state === 0) {
    drawOutsideScene();
  } else if (state === 1) {
    drawInsideScene();
  }
}

function drawOutsideScene() {
background(0);
 
  //House code
  let x = width / 2;
  let y = height / 2;
  fill('darkred');
  let big = 150;
  rect(x + 45, y + 125, 550, 400); 
  //Roof
  fill('darkgray');
  triangle(
    x - big / 2 + 20, 
    y + 130,
    x + 310,y - 50,
    x + big / 2 + 630, 
    y + 130
  );
  //Door
  stroke('black');
  fill('red');
  rect(x + 260, y + 615, 100, big / 2 - 415);
  //Windows
  fill('rgb(106,144,156)');
  rect(x + 390, y + 280, 130, 130);  //Left window
  rect(x + 100, y + 280, 130, 130);  //Right window
  //Doorknob
  fill(100);
  ellipse(x + 340, y + 400, 15);
  //End of house code
  //Create a new snowflake at random intervals
  if (frameCount % 10 === 0) {
    let x = random(width);
    let y = random(-50, -10);
    let big = random(5, 15);
    let fast = random(1, 5);
    let snowflake = new Snowflake(x, y, big, fast);
    snowflakes.push(snowflake);
  }
  //Update and display each snowflake
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    snowflakes[i].update();
    snowflakes[i].display();
  //Check if snowflake is at the bottom and add a new layer
    if (snowflakes[i].y >= height) {
      let layer = new SnowLayer(snowflakes[i].x, height, snowflakes[i].big);
      snowLayers.push(layer);
      snowflakes.splice(i, 1);
    }
  }
  //Display the snow layers
  for (let i = 0; i < snowLayers.length; i++) {
    snowLayers[i].display();
  }
  // Display the snowman
  snowman.display();
  slider.hide();
}

function drawInsideScene() {
  background(dog);

  // My Fire Code
  let p = new Particle();
  particles.push(p);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  textSize(35);
  fill(255, 255);
  textAlign(CENTER);
  text('Try Clicking the Screen To Change the Color of the Fire!', width / 2, 75);
  
  textSize(25);
  fill(255, 255);
  //textAlign(CENTER);
  text('This Changes the Size of the Fire ->', width / 4, 885);
  
  // Display the slider and related elements only when state is 1
  if (state === 1) {
    angleMode(DEGREES);
    slider.show();
    // Add any other elements you want to display in state === 1 here
  } else {
    // Manually hide the slider by modifying its style
    slider.style('display', 'none');
    // Hide any other elements that should not be displayed in state === 1
  }
}

function goInsideHouse() {
  state = 1;
  buttonOutside.show();
  button.hide();
}

function goBackOutside() {
  state = 0;
  buttonOutside.hide();
  button.show();
}
 
class Snowflake {
  constructor(x, y, big, fast) {
    this.x = x;
    this.y = y;
    this.big = big;
    this.fast = fast;
  }
  update() {
    //Move the snowflake down
    this.y += this.fast;
  }
  display() {
    //Draw the snowflake
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.big, this.big);
  }
}

class SnowLayer {
  constructor(x, y, big) {
    this.x = x;
    this.y = y;
    this.big = big;
  }
  display() {
    //Draw the snow layer
    fill(255);
    noStroke();
    rect(this.x - this.big / 2, this.y - this.big / 2, this.big, this.big);
  }
}
//End of chatgpt code

class Snowman {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.noseAngle = 0; // Initial angle for the nose
  }
  display() {
    //Draw the snowman
    fill(255);
    noStroke();
    //Body
    ellipse(this.x, this.y, 100, 100);
    ellipse(this.x, this.y - 60, 80, 80);
    ellipse(this.x, this.y - 115, 50, 50);
    //Eyes
    fill(0);
    ellipse(this.x - 10, this.y - 120, 8, 8);
    ellipse(this.x + 10, this.y - 120, 8, 8);
    //Body coal pieces
    ellipse(this.x, this.y - 50, 10, 10);
    ellipse(this.x, this.y - 65, 10, 10);
    ellipse(this.x, this.y - 80, 10, 10);
    //Mouth
    arc(this.x, this.y - 103, 10, 10, 4, PI);
    //Nose
    fill('orange');
    push(); 
    translate(this.x, this.y - 110); 
    rotate(this.noseAngle); //Rotate the nose
    triangle(
      -5, 0, //bottom vertex
      5, 0,  //bottom vertex
      0, -10 //top vertex
    );
    pop();
    //Top Hat
    fill(99, 39, 1); //Brown color for the hat
    rect(this.x - 25, this.y - 140, 50, 10);
    rect(this.x - 15, this.y - 160, 30, 20);
    //Stick arms
    rect(this.x - 78, this.y - 75, 40, 8);
    rect(this.x + 38, this.y - 75, 40, 8);
  }
  update() {
    //Rotate the nose slightly
    this.noseAngle += radians(1);
  }
}

//My Fire Code
function mouseClicked(){
  count += 1;
  if (count > 2){
    count = 1;
  }
}

class Particle {
  constructor(){
    this.x = 705;
    this.y = 650;
    this.vx = random(-1, 1);
    this.vy = random(-3, -0.5);
    this.opacity = 255;
    this.cc = 1;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.opacity -= 5;
    this.cc *= 1.2;
  }
  show(){
    let val = slider.value();
    noStroke();
    if (count == 1){
      fill(random(200, 250) + this.cc, random(140, 180) + this.cc, random(20, 100) + this.cc, this.opacity);
      ellipse(this.x + 45, this.y + 10, val+random(-75,85));
    }
    if (count == 2){
      fill(random(10, 50) + this.cc, random(10, 50) + this.cc, random(100, 120) + this.cc, this.opacity);
      push();
      //rotate(random(-2,2));
      translate(this.x, this.y - 20);
      rect(0, 0, val + random(-65,75));
      pop();
    }
  }
}
//End of My Fire Code
