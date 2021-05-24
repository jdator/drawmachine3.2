let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);


  strokeWeight(strokeWidth);
}

function draw() {

  background(140, 201, 119, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 50;


  if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {

    clear();
  }
}
