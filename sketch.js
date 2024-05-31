let bacteria = [];
let numBacteria = 2000; // Number of bacteria
let reproductionRate = 0.001; // Probability of reproduction per frame

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numBacteria; i++) {
    let bact = createBacteria(random(width), random(height));
    bacteria.push(bact);
  }
}

function draw() {
  background(255);

  // Update bacteria movements
  for (let i = 0; i < bacteria.length; i++) {
    moveBacteria(bacteria[i]);
  }

  // Reproduction
  for (let i = 0; i < bacteria.length; i++) {
    if (random(1) < reproductionRate) {
      let parentBact = bacteria[i];
      let newBact = {
        x: parentBact.x,
        y: parentBact.y,
        diameter: parentBact.diameter * 0.8, // New bacteria size is slightly smaller
        speed: parentBact.speed,
        color: parentBact.color
      };
      bacteria.push(newBact);
    }
  }

  // Draw the bacteria
  for (let bact of bacteria) {
    drawBacteria(bact);
  }
}

function createBacteria(x, y) {
  return {
    x: x,
    y: y,
    diameter: random(5, 15),
    speed: random(0.5, 2),
    color: color(random(50, 150), random(150, 255), random(50, 150), 150)
  };
}

function moveBacteria(bact) {
  // Move bacteria randomly
  bact.x += random(-bact.speed, bact.speed);
  bact.y += random(-bact.speed, bact.speed);

  // Bounce off edges
  if (bact.x < 0 || bact.x > width) {
    bact.x = random(width);
  }
  if (bact.y < 0 || bact.y > height) {
    bact.y = random(height);
  }
}

function drawBacteria(bact) {
  fill(bact.color);
  noStroke();
  ellipse(bact.x, bact.y, bact.diameter);
}
