var shape = document.getElementById("inner");
var shapeButton = document.getElementById("shape");

// SHAPE 

var countShape = 0;
shapeButton.addEventListener('click' , function(){
    var shapeAnother = shape;

    if(countShape == 0){
      shapeAnother.style.transform = "skew(20deg)";
    }else if(countShape == 1){
      shapeAnother.style.borderRadius = "50%";
    }else if(countShape == 2){
      shapeAnother.style.width= "0px";
      shapeAnother.style.height= "0px";
      shapeAnother.style.borderTop = "25px solid transparent";
      shapeAnother.style.borderLeft = "50px solid white";
      shapeAnother.style.borderBottom = "25px solid transparent";
    }
    countShape++;
    countShape%=3;
});

// BACKGROUND-COLOR

var color = document.getElementById("outer");
var colorButton = document.getElementById("color");

var countColor = 0;

colorButton.addEventListener('click' , function(){

    if(countColor == 0){
       color.style.backgroundColor = "green";
    }else if(countColor == 1){
        color.style.backgroundColor = "red";
    }else if(countColor == 2){
        color.style.backgroundColor = "Yellow";
    }
    countColor++;
    countColor %= 3;
});