// x and y for my character

var characterX = 150;

var characterY = 50;

// define the key codes for each letter

var w = 87; 

var s = 83;

var a = 65;

var d = 68;



// x and y for a shape

var shapeX = 200;
var shapeY = 500;
var shapeXSpeed;
var shapeYSpeed;

var circleX = 100;
var circleY = 10;
var circleXSpeed;
var circleYSpeed;





// create a shape when the mouse is clicked

var mouseShapeX;

var mouseShapeY;

function setup()

{

createCanvas(500, 600);

// get a random speed when the it first starts

shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + -3);

shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + -3);

circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);

circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);

}



function draw()

{

background(0,0,78);

stroke(0);

fill(0);

// top border

rect(0,0,width,10);

// left border

rect(0,0,10,height);

// bottom border

rect(0, height-10,width, 10);

// right upper border

rect(width-10,0,10,height-50);



// exit message

textSize(16);

text("EXIT", width-50,height-50)



//character

fill(255,40,123);

ellipse(characterX,characterY,60,100); 





// handle the keys

if(keyIsDown(w))

{

characterY -= 10; 

}

if(keyIsDown(s))

{

characterY += 10; 

}

if(keyIsDown(a))

{

characterX -= 10; 

}

if(keyIsDown(d))

{

characterX += 10; 

}



// potential enemy 1

fill(13,145,14);

// draw the shape

triangle(shapeX, shapeY, 50, 200, 150, 100);

// potential enemy 2

fill(13,255,14);
//
circle(circleX, circleY, 80);











// move the shape

shapeX += shapeXSpeed;

shapeY += shapeYSpeed;

circleX += circleXSpeed;

circleY += circleYSpeed;

// check to see if the shape has gone out of bounds

if(shapeY || circleY > width);

{

circleX = 0;

}

if(circleX || shapeX < 0)

{

shapeX = width;
circleX = width;

}

if(circleY = width)

circleY = height;

if(shapeX < 200)

{

shapeY = width;

}

if(shapeX < 0)

{

shapeX = height;

}



// check to see if the character has left the exit

if(characterX > width && characterY > width-50)

{

//check to see if second 

fill(0);
stroke(5);
textSize(26);
textFont('Cursive');

text("You Win!", width/2-50, height/2-50);

}



// create the shape based on the mouse click

fill(120,130,140);
beginShape();
vertex(mouseShapeX, 75);
vertex(100, mouseShapeY);
vertex(mouseShapeX, 75);
vertex(100, mouseShapeY);
endShape(CLOSE);

}



function mouseClicked()

{

mouseShapeX = mouseX;

mouseShapeY = mouseY;

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




 















































