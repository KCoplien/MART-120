
var pupilX = 200;
var pupilY = 101;
var pupilDirection = 1;

var ellipseX = 200;
var ellipseY = 100;
var ellipseDirection = 2;

var triangleY = 200
var triangleDirection = 3;
var lineX = 355
var lineY = 90
var lineDirection = 4;

var size = 35;
var count = 0;
var sizeDirection = 35;



function setup() {
  createCanvas(800, 800);
}

function draw() {
// integer RGBA notation
background('rgba(0,255,0, 0.25)');


//glasses
ellipse(ellipseX,ellipseY,100,80);
ellipse(400,100,100,80);
line(lineX, lineY, 245, 90);

//eyes
ellipse(200,101,50,40);
ellipse(400,101,50,40);
//pupils
point(pupilX, pupilY);
point(400, 101);
//face

strokeWeight(9);
noFill();
stroke(255, 102, 0);
curve(10, 9, 300, 300, 500, 90, 10, 200);
//hair
stroke(100, 100, 100);
curve(900, 10, 480, 400, 90, 33, 825, 75);
stroke(100, 100, 100);
curve(800, 20, 500, 300, 100, 30, 800, 100);
stroke(100, 100, 100);
curve(700, 9, 460, 500, 80, 40, 850, 50);

//nose
stroke(255, 102, 0);
triangle(310, triangleY, 325, 125, 323, 210);

pupilX+=pupilDirection;
    if(pupilX >= 418 || pupilX <= 82)
    {
        pupilDirection *= -1;
    }
ellipseY += ellipseDirection;
    if(ellipseY <= 0 || ellipseY >= 120 )
    {
        ellipseDirection *= -1;
    }
triangleY+=triangleDirection;
    if(triangleY >= 418 || triangleY <= 82)
    {
        triangleDirection *= -1;
    }
lineX+=lineDirection

if(lineX <=200 || lineY >= 220)

{
lineDirection *= -1;
}



fill(100, 100, 170, 100);
 textSize(size);
size+= sizeDirection;
count++;
if(count > 11)
{
sizeDirection *=-1;
count = 0;
}
text('Kim Coplien', 25, 600);





  
}

