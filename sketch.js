let angle = 0;
let targetAngle = 0;
let spinning = false;
let speed = 0;
let deceleration = 0.98; // Slow down factor

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  let sliceAngle = TWO_PI / numPrize;

  // Draw the wheel
  for (let i = 0; i < numPrize; i++) {
    let startAngle = i * sliceAngle + angle;
    let endAngle = (i + 1) * sliceAngle + angle;
    fill((i % 2 === 0) ? 255 : 200);
    stroke(0);
    strokeWeight(1);
    arc(0, 0, 500, 500, startAngle, endAngle, PIE);

    // Draw the name
    fill(0);
    let midAngle = (startAngle + endAngle) / 2;
    let nameX = cos(midAngle) * 180; // Moved closer to the center
    let nameY = sin(midAngle) * 180; // Moved closer to the center
    push();
    translate(nameX, nameY);
    rotate(midAngle); // Rotate 90 degrees to align with the segment

    // Adjust text size to fit within the arc
    textSize(20); // Use a fixed size for larger text
    let textToShow = prizeArray[i];
    // Ensure the text fits within the segment
    while (textWidth(textToShow) > 150) {
      textSize(textSize() - 1);
    }
    text(textToShow, 0, 0);
    pop();
  }

  // Draw the pointer on the right-hand side
  fill(255, 0, 0);
  noStroke();
 triangle(280, -10, 280, 10, 260, 0); // juster 280, 280, 260 for at flytte pilen

  // Spin the wheel if spinning is true
  if (spinning) {
    angle += speed;
    speed *= deceleration; // Slow down over time

    if (speed < 0.001) {
      spinning = false;
      speed = 0;
      let normalizedAngle = (angle % TWO_PI + TWO_PI) % TWO_PI;
let selectedIndex = Math.floor(((TWO_PI - normalizedAngle) / sliceAngle)) % numPrize;;
      alert("Selected: " + prizeArray[selectedIndex]);
    }
  }
}

function mouseClicked() {
  if (!spinning) {
    angle = 0;
    targetAngle = random(PI, 2 * PI) * 5;
    speed = targetAngle / 20; // Initial speed
    spinning = true;
  }
}


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   currentNumber = getRandomElement(prizeArray);
  
//   //KNAP

//   // opret knap der kalder getRandomElement(arr)
//   button = createButton('find en præmie');

//   // button style
//   button.style("font-size", "25px");
//   button.style("border-radius","40px");
//   button.style("padding","20px");

//   // position
//   button.center('horizontal');
//   button.position(button.x, height/2 + 50);

//   // kald funktion
//   button.mousePressed(() => {
//     currentNumber = getRandomElement(prizeArray); // opdater currentNumber ved klik
//     // kontrol
//   console.log("Tilfældigt tal:", currentNumber, "Længde på array:", prizeArray.length); 
//   });
// }

// function draw() {
//   background(220);

//   // visning af nummer
//   textAlign(CENTER, CENTER);
//   textSize(50);
//   fill(textFarve);
//   text(currentNumber  ?? "hvad sker der", width/2, height/2)
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // button.center('horizontal');        // Følger med ved resize
  // button.position(button.x, height/2 + 50); // Opdater Y-position
}
