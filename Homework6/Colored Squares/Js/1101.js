function pickColor(){
    var colorArray = ["red", "green", "yellow", "blue", "black", "purple", "orange"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

// fix me!  Make me randomly return a number.  You can pick the range of numbers returned.
function pickPos(){
    return Math.floor((Math.random()*300)+100) + "px";
}

function addSquare(){
    var div = document.createElement("div");
    
    // fix me! Use pickColor to randomly assign a color to the square's background
    div.style.background = pickColor();
    
    // Right now this doesn't change the left or top values since pickPos hasn't been implemented  :(
    div.style.left=pickPos();
    div.style.top=pickPos();
    
    // Extra credit! Also set the width and height of the squares with pickPos
    
    $("body").append(div);
}

var button = document.getElementById("squareButton");
button.onclick = addSquare;
