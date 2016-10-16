console.log ("hello")

canvas = document.getElementById ("mycanvas");
ctx = canvas.getContext("2d")

var size = 4;
var height = 400;
var width = 400;
var imageData = ctx.getImageData(0,0,width, height)

var x = 50;
var y = 0;

imageData.data[ x*size] = 255
imageData.data[(x*size)+1] = 0
imageData.data[(x*size)+2] = 0
imageData.data[(x*size)+3] = 255

var x = 250;
var y = 0;


/*for (x= 50; x<100000; x=x+1+400) {
    imageData.data[x*size] = 255;
    imageData.data[(x*size)+1] = 0;
    imageData.data[(x*size)+2] = 0;
    imageData.data[(x*size)+3] = 255;
}
*/


for (x= 0; x<250; x=x+1) { y=x;
    imageData.data[((x+(y*width))*size)] = 255;
    imageData.data[((x+(y*width))*size)+1] = 0;
    imageData.data[((x+(y*width))*size)+2] = 0;
    imageData.data[((x+(y*width))*size)+3] = 255;
}


//var x = 0 - 250;
//var y = 0 - 250

for (x= 50; x<250; x=x+1)  { y=x;
    imageData.data[x*size] = 255;
    imageData.data[(x*size)+1] = 0;
    imageData.data[(x*size)+2] = 0;
    imageData.data[(x*size)+3] = 255;
}


//if (y=0; x< 250; y=y+1)

/*
while (true) x=50

x <= 250; x + 4; 
return imageData.data[x*size] = 255



return imageData.data[(x*size)+1] = 0

return imageData.data[(x*size)+2] = 0

return imageData.data[(x*size)+3] = 255

*/



ctx.putImageData(imageData,0, 0)

/*
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
var oldStyle = ctx.strokeStyle;
ctx.strokeStyle="#FF0000";
ctx.stroke();
ctx.strokeStyle = oldStyle;
*/

/*
ctx.beginPath();
ctx.moveTo(100,0);
ctx.lineTo(300,150);
ctx.stroke();


ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI)
ctx.fillStyle ="#FF0000";
ctx.fill();
*/

/*ctx.strokeStyle="#FF0000"

ctx.rect(20,20,150,100);
ctx.stroke();

ctx.fillRect(20,20,150,100)
*/

function degreeToRad (x) {
return ((2*3.14)/360)*x;
}

function drawCat () { 

ctx.beginPath();
ctx.arc(200,200,50, degreeToRad(247.5),degreeToRad(292.5) );
ctx.lineTo(250,140);
ctx.arc(200,200,50, degreeToRad(315),degreeToRad(225) );
ctx.lineTo(150,140);
ctx.arc(200,200,50, degreeToRad(247.5),degreeToRad(292.5) );
ctx.fillStyle ="#8b4513";
ctx.fill();
ctx.stroke();


var sx = 200
var sy = 208 


ctx.beginPath();
ctx.moveTo(sx,sy);
ctx.lineTo(sx-5,sy-10);
ctx.lineTo(sx+5,sy-10);
ctx.lineTo(sx,sy);
ctx.fillStyle ="#000000";
ctx.fill();


ctx.beginPath();
ctx.arc(200,200-5,30, degreeToRad(45),degreeToRad(90+45) );

ctx.stroke();

}


function drawEyesOpen () {
    ctx.beginPath();
    ctx.arc(180,180,5,0,2*Math.PI );
    ctx.fillStyle ="#000000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(220,180,5,0,2*Math.PI );
    ctx.fillStyle ="#000000";
    ctx.fill();
}

function clearEyes () {
    ctx.save();
    ctx.beginPath();
    ctx.arc(180,180,5,0,2*Math.PI );
    ctx.fillStyle ="#8b4513";
    ctx.fill();
    ctx.strokeStyle ="#8b4513";
    ctx.stroke ();

    ctx.beginPath();
    ctx.arc(220,180,5,0,2*Math.PI );
    ctx.fillStyle ="#8b4513";
    ctx.fill();
    ctx.strokeStyle ="#8b4513";
    ctx.stroke ();
    ctx.restore();
}


function drawEyesClosed () { 
    ctx.beginPath();
    //die folgende zeile zeichnet gegen den Uhrzeigersinn
    ctx.arc(180,180,5,0, 1*Math.PI, true );
    ctx.stroke ();

    ctx.beginPath();
    ctx.arc(220,180,5,0, 1*Math.PI, true );
    ctx.stroke ();
}


drawCat ();


var blinkEventCount = 0;


window.setInterval(function() {
    blinkEventCount = 1+blinkEventCount;
    if (blinkEventCount%2==1) {clearEyes(); drawEyesClosed ()};
    if (blinkEventCount%2==0) {drawEyesOpen ()};
}, 3*1000);


/* diese Zeile:
window.setInterval(catBlink, 3*1000);

macht das gleiche wie diese:
window.setInterval(function() {
    drawCat();
}, 3*1000);
*/





//window.setTimeout(drawCat, 3*1000);







