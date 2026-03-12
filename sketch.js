let textFarve = "#000000"
let button

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentNumber = getRandomElement(talArray);
  
  //KNAP

  // opret knap der kalder getRandomElement(arr)
  button = createButton('generer nyt tal');

  // button style
  button.style("font-size", "25px");
  button.style("border-radius","40px");
  button.style("padding","20px");

  // position
  button.center('horizontal');
  button.position(button.x, height/2 + 50);

  // kald funktion
  button.mousePressed(() => {
    currentNumber = getRandomElement(talArray); // opdater currentNumber ved klik
    // kontrol
  console.log("Tilfældigt tal:", currentNumber, "Længde på array:", talArray.length); 
  });
}

function draw() {
  background(220);

  // visning af nummer
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(textFarve);
  text(currentNumber  ?? "hvad sker der", width/2, height/2)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.center('horizontal');        // Følger med ved resize
  button.position(button.x, height/2 + 50); // Opdater Y-position
}
