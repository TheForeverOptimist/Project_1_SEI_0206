const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
    myButton.style.display = "none";
});

const gif = document.getElementById("gif");

let xPosition = 0;
let yPosition = 0;
let moveIt = false;

function moveGif() {
    xPosition += 5;
    yPosition += 2;
    gif.style.left = xPosition + "px"
    gif.style.left = yPosition + "px";

    //check if gif reached center
    if(xPosition >= 900) {
        cancelAnimationFrame(moveGif);
        // moveIt = false;
    } else {
        requestAnimationFrame(moveGif);
    }
    }
    // document.getElementById(myButton).addEventListener("click", function(){
    //     if(!moveIt) {
            moveGif();
    //     }
    // });