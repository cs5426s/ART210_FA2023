function setup() {
  createCanvas(359, 440);
}

function draw() {
  background(215, 213, 201);

//gray rect lines
  stroke(176, 174, 165);
  fill(176, 174, 165);
  quad(63, 185, 64, 185, 120, 440, 110, 440);
  quad(80, 175, 81, 175, 329, 440, 314, 440);

//white rect lines
  stroke(230);
  fill(230);
  quad(160, 80, 180, 80, 240, 250, 210, 255);
  
//more gray rect lines  
  stroke(176, 174, 165);
  fill(176, 174, 165);
  quad(130, 169, 131, 169, 359, 305, 359, 315);
  quad(200, 170, 201, 170, 440, 300, 440, 320);
  
//gray lines
  strokeWeight(2);
  stroke(72);
  line(0, 325, 359, 325);
  line(300, 240, 440, 240);
  line(359, 285, 130, 293);
  line(15, 0, 60, 20);
  line(0, 420, 40, 430);
  line(0, 430, 40, 430);
  line(35, 420, 320, 350);
  line(130, 200, 320, 350);
  line(0, 40, 115, 60);
  line(290, 380, 359, 380);
  line(310, 415, 379, 395);
//blue line
  stroke(0, 0, 140);
  line(0, 193, 335, 270);
//thin gray lines
  stroke(72);
  strokeWeight(1);
  line(0, 190, 359, 190);
  line(0, 70, 100, 105);
  line(200, 0, 200, 30);
  line(200, 30, 290, 100);
  line(0, 190, 80, 150);
  line(300, 180, 190, 200);
  line(190, 200, 290, 260);
//red line
  strokeWeight(2);
  stroke(180, 0, 0);
  line(0, 100, 240, 150);
//orange line
  strokeWeight(5);
  stroke(252, 129, 1);
  line(359, 302, 320, 302);
//orange thin line
  strokeWeight(1);
  line(0, 250, 30, 252);
  
//yellow lines
  stroke(240, 200, 0);
  strokeWeight(6)
  line(220, 230, 240, 230);
  line(290, 230, 250, 230);
  line(330, 230, 300, 230);
  
//yellow circles
  stroke(240, 200, 0);
  fill(240, 200, 0);
  ellipse(60, 203, 30, 5);
  ellipse(62, 235, 60, 20);
  ellipse(63, 290, 100, 40);
  
//line over yellow circles
  stroke(72);
  strokeWeight(1);
  line(60, 185, 80, 320);

//blue dots
  stroke(0, 0, 200);
  fill(0, 0, 200);
  ellipse(70, 3, 6, 6);
  ellipse(42, 205, 8, 8);
  ellipse(54, 120, 6, 6);
  ellipse(125, 22, 6, 6);
  ellipse(139, 89, 6, 6);
  ellipse(138, 92, 6, 6);
  ellipse(168, 127, 6, 6);
  ellipse(172, 125, 6, 6);
  ellipse(212, 50, 6, 6);
  
//red dots
  stroke(180, 0, 0);
  fill(180, 0, 0);
  ellipse(100, 20, 8, 8);
  ellipse(102, 22, 8, 8);
  ellipse(123, 30, 7, 7);
  ellipse(127, 30, 7, 7);
  ellipse(143, 30, 7, 7);
  ellipse(198, 75, 7, 7);
  ellipse(215, 130, 7, 7);
  ellipse(235, 45, 7, 7);
  ellipse(237, 45, 7, 7);
  ellipse(307, 52, 7, 7);
  ellipse(358, 32, 7, 7);
  
//orange dots
  stroke(252, 129, 1);
  fill(252, 129, 1);
  ellipse(42, 51, 5, 5);
  ellipse(138, 135, 6, 6);
  ellipse(160, 32, 7, 7);
  ellipse(163, 30, 7, 7);
  ellipse(198, 87, 5, 5);
}
