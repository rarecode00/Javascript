var button = document.getElementById("btn");

var numberOfCount = 0;

button.addEventListener('click' , function(){
    numberOfCount++;
    document.getElementById("text").innerHTML = "Box Clicked " + numberOfCount + " times";
    if(numberOfCount >= 5){
        button.style.boxShadow = "4px 4px 4px 4px yellow";
        button.style.borderRadius = "50%";
    }
});