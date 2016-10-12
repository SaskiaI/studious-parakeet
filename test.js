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

//if (y=0; x< 250; y=y+1

/*
while (true) x=50

x <= 250; x + 4; 
return imageData.data[x*size] = 255



return imageData.data[(x*size)+1] = 0

return imageData.data[(x*size)+2] = 0

return imageData.data[(x*size)+3] = 255

*/

ctx.putImageData(imageData,0, 0)

