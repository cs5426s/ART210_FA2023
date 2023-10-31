let agents = [];
let attractor;

function setup() {
  createCanvas(1280, 720);
  
  attractor = createVector(width / 2, height / 2);
  
  for (let i = 0; i < 150; i ++) {
    agents.push(new Agent());
  }
}


function draw() {
  background(0, 20);
  
  for (let agent of agents) {
    agent.attract(attractor);
    agent.wander();
    agent.update();
    agent.show();
  }
}


class Agent {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
    this.noiseOffset = random(1000);
  }
  
  attract(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(0.1);
    this.acc.add(force);
  }
  
  wander() {
    let angle = noise(this.noiseOffset) * TWO_PI * 2;
    let force = p5.Vector.fromAngle(angle);
    force.mult(0.2);
    this.acc.add(force);
    this.noiseOffset += 0.02;
  }
  
}
