const myButton = document.getElementById("myButton");
const strikeBall = document.getElementById("strikeBall");

myButton.addEventListener("click", function(){
    myButton.style.display = "none";
});

// strikeBall.addEventListener("click", function(){
//     if(gif.paused) {
//         gif.play();
//         strikeBall.textContent = "Pause";
//     } else {
//         gif.pause();
//         strikeBall.textContent = "Play";
//     }
// });

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
    if(xPosition >= 1460) {
        cancelAnimationFrame(moveGif);
        moveIt = false;
    } else {
        requestAnimationFrame(moveGif);
    }
    }
    document.getElementById("myButton").addEventListener("click", function(){
        if(!moveIt) {
            moveIt = true;
            moveGif();
        }
    });