//x and y for my character
var characterX = 100;
var characterY = 100;


// define the key codes for each letter

var w = 87; 

var s = 83;

var a = 65;

var d = 68;



// x and y for a shape

var shapeX = 100;
var shapeY = 100;
var shapeXSpeed;
var shapeYSpeed;

var circleX = 100;
var circleY = 10;
var circleXSpeed;
var circleYSpeed;





// create a shape when the mouse is clicked



function setup()

{

createCanvas(400, 500);


// get a random speed when the it first starts

shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
//character(250,300);

}



function draw() 
{
background(255,0,25);

//call for creating border
border(15);

//call for exit
exit();

//call for character
//character(100,100);

//call for draw character
drawCharacter();
characterMovement();

//enemy1
enemy1();

//enemy2
enemy2();



//call
mouseClicked();
}

function border(thickness)
{
stroke(0);  
fill(0);
rect(0,0,width,thickness);
rect(0,0,thickness,height);
rect(0, height-10,width, thickness);
rect(width-10,0,thickness,height-50);
}


// define exit function

function exit() 
{
textSize(16);
textFont('Cursive');
text("EXIT", width-50,height-50);
}



//character
function character(x,y)
 {
characterX = x;
characterY = y;

fill(255,40,123);
ellipse(characterX, characterY, 60, 100); 
}
function drawCharacter()
{
fill(255,40,123);
ellipse(characterX, characterY, 60, 100); 
}


// handle the keys
 function characterMovement()

{

if(keyIsDown(w))
{
characterY -= 10; 
//console.log("movement: " + characterY);
}

if(keyIsDown(s))

{

characterY += 10; 
//console.log("movement: " + characterY);
}

if(keyIsDown(a))

{

characterX -= 10; 
console.log("movement: " + characterX);
}

if(keyIsDown(d))

{

characterX += 10; 
//console.log("movement: " + characterX);
}
}
// potential enemy 1

function enemy1(x1, y1, x2, y2, x3, y3)
{
strokeWeight(2);
fill(13,145,14);
triangle(shapeX, shapeY, 100, 60, 600, 100);
}

// potential enemy 2

function enemy2(diameter)
{
fill(13,255,14);
circle(circleX, circleY, 80);
}
// move the shape

shapeX += shapeXSpeed;

shapeY += shapeYSpeed;

circleX += circleXSpeed;

circleY += circleYSpeed;

// check to see if the shape has gone out of bounds

//if(shapeY || circleY > width);
if(circleX > 500)
{

circleX = 0;

}

if(circleX < 0)

{

//shapeX = width;
circleX = 500;

}

if(circleY < 500)

circleY = 100;

if(shapeX < 200)

{

shapeY = 500;

}

if(shapeX < 0)

{

shapeX = 200;

}



// check to see if the character has left the exit

if(characterX > 500 && characterY > width-50)

{

//check to see if second 

fill(0);
stroke(5);
textSize(26);
textFont('Cursive');

text("You Win!", width/2-50, height/2-50);

}



// create the shape based on the mouse click

function mouseClicked()
{
fill(120,130,140);
beginShape();
vertex(100, 75);
vertex(100, 100);
vertex(100, 75);
vertex(100, 100);
endShape(CLOSE);

}



/*

function keyPressed() {

if (keyCode === LEFT_ARROW) {

characterX -= 10;

} 

else if (keyCode === RIGHT_ARROW) {

characterX += 10;

}

else if (keyCode === UP_ARROW) {

characterY -= 10;

}

else if (keyCode === DOWN_ARROW) {

characterY += 10;

}
}
*/
