
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  ellipse(200,100,100,80);
ellipse(400,100,100,80);
line(355, 90, 245, 90);
ellipse(200,101,50,40);
ellipse(400,101,50,40);
point(200, 101);
point(400, 101);
stroke('black'); // Change the color
strokeWeight(9);
noFill();
stroke(255, 102, 0);
curve(10, 9, 300, 300, 500, 90, 10, 200);
stroke(0);
curve(900, 10, 480, 400, 90, 33, 825, 75);
stroke(255, 102, 0);
triangle(310, 200, 325, 125, 323, 210);




}
