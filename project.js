const canvas = document.getElementById("canvas");
const myButton = document.getElementById("myButton");
const strikeBall = document.getElementById("strikeBall");
const golfBall = document.querySelector('.ball');
const distance = 1000; //distance to hit the ball
const interval = 10; //change motion in miliseconds
const sizeChange = 0.5; //amount to reduce size by each movement
const opacityChange = 0.05; //amount to reduce opacity by

const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const spriteSheet = new Image();
spriteSheet.src = 'images/golfgif.png';

const spriteWidth = 360;
const spriteHeight = 592;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 30;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(spriteSheet, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0){
    if(frameX < 7) frameX++;
    else frameX = 0;
    }
    gameFrame++
    requestAnimationFrame(animate);
};




myButton.addEventListener("click", function(){
    myButton.style.display = "none";
    animate();
    let position = 0;
    const moveInterval = setInterval(function() {
        position += 5;
        spriteSheet.style.left = position + 'px';
        if (position >= 300) {
            clearInterval(moveInterval);
            // Add code to stop the animation or start the next animation here
        }
    }, 10);
});

strikeBall.addEventListener('click',() => {
    animate();
});

//before sprite animations
// strikeBall.addEventListener("click", function(){
//     if(gif.paused) {
//         gif.play();
//         strikeBall.textContent = "Pause";
//     } else {
//         gif.pause();
//         strikeBall.textContent = "Play";
//     }
// });

//before doing sprite animations
// const gif = document.getElementById("gif");

// let xPosition = 0;
// let yPosition = 0;
// let moveIt = false;
// let animation = null;

// function moveGif() {
//     xPosition += 5;
//     yPosition += 2;
//     gif.style.left = xPosition + "px"
//     gif.style.left = yPosition + "px";

//     //check if gif reached center
//     if(xPosition >= 1460) {
//         cancelAnimationFrame(animation);
//         moveIt = false;
//         strikeBall.style.display = "block"; //show the swing button
//     } else {
//         animation = requestAnimationFrame(moveGif);
//     }
//     }
//     function playGif(){
//     if(!moveIt && xPosition < 1460){
//         moveIt = true;
//         animation = requestAnimationFrame(moveGif);
//     }
//     }
//     function pauseGif(){
//         cancelAnimationFrame(animation);
//         moveIt = false;
//         xPosition = 1460;
//         yPosition = 0;
//         gif.style.left = xPosition + "px";
//         gif.style.top = yPosition + "px";
//     }
//     myButton.addEventListener("click", function(){
//         playGif();
//     });

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


    //more sprite animation trial and error
// const ctx = canvas.getContext('2d');
// const CANVAS_WIDTH = canvas.width = 600;
// const CANVAS_HEIGHT = canvas.height = 600;

// const playerImage = new Image();
// playerImage.src = 'golfgif.png';
// const spriteWidth = 360;
// const spriteHeight = 592;
// let frameX = 0;
// let frameY = 0;
// let gameFrame = 0;
// const staggerFrames = 30;

// function animate(){
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
//     if (gameFrame % staggerFrames == 0){
//     if(frameX < 7) frameX++;
//     else frameX = 0;
//     }
//     gameFrame++
//     requestAnimationFrame(animate);
// };
