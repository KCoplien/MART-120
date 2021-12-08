var x = 23;
var y = 45;
diameter = 33;


//x and y for my character
var characterX = 100;
var characterY = 100;


// define the key codes for each letter

var w = 87; 

var s = 83;

var a = 65;

var d = 68;



// x and y for a shape

//var shapeX = 100;
//var shapeY = 100;
//var shapeXSpeed;
//var shapeYSpeed;

 //bubbles (obstacles)
var bubX = []; 
var bubY = [];
var bubdiameter = [];      

var bubXs = [25, 55, 75, 100]
var bubYs = [45, 75, 100, 150];
var bubDias = [25, 55, 65, 85];

   


//var circleY = 10;
//var circleXSpeed;
//var circleYSpeed;





// create a shape when the mouse is clicked



function setup()

{

createCanvas(500, 600);
for (var i = 0; i < 5; i++) { 

bubXs[i] = getRandomNumber(500);
bubYs[i] = getRandomNumber(600);
bubDias[i] = getRandomNumber(100);

           
}    
}

// get a random speed when the it first starts

//ballsXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

//ballsYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

//circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

//circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
//character(250,300);





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




//bubbles aka Concentric Circles
for(var i = 0; i < bubXs.length; i++)
{
ConcentricCircle(bubXs[i], bubYs[i], bubDias[i], bubDias[i]/2, 150);
 
    
}
}




//call
//mouseClicked();

//define border
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
//get random number
function getRandomNumber(number)
{
return Math.floor(Math.random()*number)+10;

}

//define Concentric Function
function ConcentricCircle(x, y, outer_diameter, inner_diamter, outer_red, outer_green, outer_blue, inner_red, inner_green, inner_blue)

{
fill(outer_red, outer_green,outer_blue);
circle(x,y,outer_diameter);
fill(inner_red, inner_green, inner_blue);
circle(x,y,inner_diamter);



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
