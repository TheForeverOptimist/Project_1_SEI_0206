const myButton = document.getElementById("myButton");
// const strikeBall = document.getElementById("strikeBall");
const golfBall = document.querySelector('.ball');
const distance = 1000; //distance to hit the ball
const interval = 10; //change motion in miliseconds
const sizeChange = 0.5; //amount to reduce size by each movement
const opacityChange = 0.05; //amount to reduce opacity by

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

    // strikeBall.addEventListener("click", function() {
    //     if (!moveIt){
    //         playGif();
    //         setTimeout(function(){
    //             strikeBall.style.display = "none"; //hide the swing button
    //         }, 1000);
    //         }else{
    //             pauseGif();
    //     }
    // });
        
    const strikeBall = document.getElementById("strikeBall");
    strikeBall.addEventListener("click", function(){
       const moveBall = setInterval(function(){
        if(distance <= 0){
            clearInterval(moveBall);
        }else {
            golfBall.style.transform = 'translate(0, -' + distance + 'px)';
            golfBall.style.width = golfBall.offsetWidth * 0.5 + 'px';
            golfBall.style.height = golfBall.offsetHeight * 0.5 + 'px';
            golfBall.style.opacity -= 0.05;
            golfBall.style.transform += 'rotate (20deg)';
            distance -= 10;
        }
       }, 50);
    });