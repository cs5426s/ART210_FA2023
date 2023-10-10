let state = "doors"; // Initialize state to "doors"
let doorImages = []; // Array to hold door images
let stateImages = []; // Array to hold state images
let doorClicked = -1; // To keep track of which door was clicked

function preload() {
  wall = loadImage('data/wall.png');
  
  // Load door images individually
  doorImages[0] = loadImage('data/door1.png');
  doorImages[1] = loadImage('data/door1.png');
  doorImages[2] = loadImage('data/door1.png');

  // Load state images individually
  stateImages[0] = loadImage('data/rat1.png');
  stateImages[1] = loadImage('data/cat1.png');
  stateImages[2] = loadImage('data/worm1.png');
}

function setup() {
  createCanvas(1024, 768, WEBGL);
  // Shuffle state images
  shuffle(stateImages, true);
  describe('spinning cube with a texture from an image');
}

function draw() {
  //background(wall);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(stateImages[1]);
  box(width / 2);
  if (state === "doors") {
    drawDoors();
  } else {
    showImage();
  }
}

function drawDoors() {
  // Draw door images
  for (let i = 0; i < 3; i++) {
    image(doorImages[i], 50 + i * 300, 200, 300, 500);
    fill(136, 0, 0);
  textSize(48);
  text("Choose A Door To Seal Your Fate", 130, 200);
  }
}

function showImage() {
  // Display state image based on the door clicked
  image(stateImages[doorClicked], 200, 190, 650, 550);
}

function mousePressed() {
  if (state === "doors") {
    // Check which door is clicked
    for (let i = 0; i < 3; i++) {
      if (mouseX > 50 + i * 300 && mouseX < 350 + i * 300 && mouseY > 300 && mouseY < 600) {
        doorClicked = i;
        state = `image${i}`; // Unique state for each door
        break;
      }
    }
  } else {
    // Go back to doors state
    state = "doors";
    // Shuffle state images again
    shuffle(stateImages, true);
  }
}
