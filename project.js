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
let animation = null;

function moveGif() {
    xPosition += 5;
    yPosition += 2;
    gif.style.left = xPosition + "px"
    gif.style.left = yPosition + "px";

    //check if gif reached center
    if(xPosition >= 1460) {
        cancelAnimationFrame(animation);
        moveIt = false;
        strikeBall.style.display = "block"; //show the swing button
    } else {
        animation = requestAnimationFrame(moveGif);
    }
    }
    function playGif(){
    if(!moveIt && xPosition < 1460){
        moveIt = true;
        animation = requestAnimationFrame(moveGif);
    }
    }
    function pauseGif(){
        cancelAnimationFrame(animation);
        moveIt = false;
        xPosition = 1460;
        yPosition = 0;
        gif.style.left = xPosition + "px";
        gif.style.top = yPosition + "px";
    }
    myButton.addEventListener("click", function(){
        playGif();
    });

    strikeBall.addEventListener("click", function() {
        if (!moveIt){
            playGif();
            setTimeout(function(){
                strikeBall.style.display = "none"; //hide the swing button
            }, 1000);
            }else{
                pauseGif();
        }
    });
        
    // document.getElementById("strikeBall").addEventListener("click", function(){
    //     if(!moveIt) {
    //         moveIt = true;
    //         animation = requestAnimationFrame(moveGif);
    //         // moveGif();
    //     }else {
    //         cancelAnimationFrame(animation);
    //         moveIt = false;
    //     }
    // });