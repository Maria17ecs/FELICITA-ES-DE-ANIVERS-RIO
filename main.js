var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromuRL('AniversarioImagem.png', function(Img){
    blockImageObject = Img;
    blockImageObject.scaleToWIdth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
    topi: 0,
    left:0
    });
    canvas.add(blockImageobject);
    });
}

function playSound(){
    x.play();
}
