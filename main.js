canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width  = 120;
car1_height  = 70;
car1_image = "https://postimg.cc/9rqYz9HM";
car1_x = 10;
car1_y = 10;

car1_width  = 120;
car1_height  = 70;
car1_image = "https://postimg.cc/9rqYz9HM";
car1_x = 10;
car1_y = 10;

background_image = "https://postimg.cc/p9D2dqqZ";

function add(){

background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_image;

background_imgTag = new Image();
background_imgTag.onload = upload;
background_imgTag.src = background_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_image;

}

function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function car1(){
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function car2(){
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38')
{
car1_up();
console.log("car1_up");
}

if(keyPressed == '40')
{
car1_down();
console.log("car1_down");
}

if(keyPressed == '37')
{
car1_left();
console.log("car1_left");
}

if(keyPressed == '39')
{
car1_right();
console.log("car1_right");
}

keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38')
{
car2_up();
console.log("car2_up");
}

if(keyPressed == '40')
{
car2_down();
console.log("car2_down");
}

if(keyPressed == '37')
{
car2left();
console.log("car2_left");
}

if(keyPressed == '39')
{
car2_right();
console.log("car2_right");
}
}
