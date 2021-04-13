/*
Seth Tal
12/18/19
PongJS: a pong clone game made from scratch with a canvas element

*/

/* CONSTANT VARIABLES */
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext('2d');


/* GLOBAL VARIABLES */
var unit = 16;
let cw = canvas.getAttribute("width");    // canvas width
let ch = canvas.getAttribute("height");   // canvas height

var playerScore = aiScore = 0;

// player vars
var p1x = 1*unit;         // player paddle Xpos
var p1y = 6.5*unit;       // player paddle Ypos

// ai vars
var p2x = 18.5*unit;      // ai paddle Xpos
var p2y = 6.5*unit;       // ai paddle Ypos
var aiv = 3;            // ai velocity is slightly slower than the ball (this is so the player can actually win)

// ball vars
var bs = unit/2;          // ball size
// var bv = 2;               // ball speed
var bvx = 3.5;              // ball velocity X
var bvy = 3.5;              // ball velocity Y
var bpx = cw/2 - unit/2;  // ball Xpos
var bpy = ch/2 - unit/2;  // ball Ypos


// initialization function
function gameLoop() {
    
    setInterval(draw, 1000/60);  // executes draw function 60 times per second

    window.addEventListener("mousemove", function(event) {
        let currentMargin = canvas.style.marginTop;
        p1y = event.clientY - ch - 9.25*unit;
    })
    
}

// draw function
// Canvas is 19x14 'units' (unit is 16x16 pixels)
function draw() {
    ctx.clearRect(0, 0, cw, ch);  // clears screen on every refresh

    bpx += bvx;
    bpy += bvy;

    // paddles
    ctx.fillStyle = 'grey';                    // color of the paddles
    ctx.fillRect(p1x, p1y, 0.5*unit, 3*unit);  // paddle 1 (player)
    ctx.fillRect(p2x, p2y, 0.5*unit, 3*unit);  // paddle 2 (ai)

    // ball
    ctx.fillStyle = 'red';
    ctx.fillRect(bpx, bpy, bs, bs);

    // 'ui'
    ctx.fillStyle = 'black';
    ctx.fillText("player: " + playerScore, 10, 10);
    ctx.fillText("enemy: " + aiScore, cw - 50, 10)

    checkCollisions();
    aiCalc();
    
}

function gameReset() {
    // player vars
    p1x = 1*unit;
    p1y = 6.5*unit;

    // ai vars
    p2x = 18.5*unit;
    p2y = 6.5*unit;

    // ball vars
    if (playerScore > aiScore) {
        bvx = 3;
        bvy = 3;
    } else if (playerScore < aiScore) {
        bvx = 4;
        bvy = 4;
    } else {
        bvx = 3.5;
        bvy = 3.5;
    }
    // bvx = 3.5;
    // bvy = 3.5;
    bpx = cw/2 - unit/2;
    bpy = ch/2 - unit/2;

}

function checkCollisions() {
    // These are in respect to the balls pos
    var rightFace = bpx + bs;               // ball rightFace = currentXpos + width
    var leftFace = bpx;                     // ball leftFace = currentXpos
    var topFace = bpy;                      // ball topFace = currentYpos
    var bottomFace = bpy + bs;              // ball bottomFace = currentYpos + width

    // These are in respect to the paddles
    var p1RightFace = p1x + (0.5*unit);     // p1 rightFace = currentXpos + width
    var p2LeftFace = p2x;                   // p2 leftFace = currentXpos

    if (leftFace < p1RightFace) {
        // if its Ypos is between topPaddle & bottomPaddle
        if ((bpy > p1y) && (bpy < (p1y + 3*unit))) {
            // bounce off paddle
            bvx = -bvx
        } else {
            // stuff
            aiScore++;
            gameReset();
        }
    }

    if (rightFace > p2LeftFace) {
        if ((bpy > p2y) && (bpy < (p2y + 3*unit))) {
            bvx = -bvx
        } else {
            playerScore++;
            gameReset();
        }
    }


    if (topFace < 0) {
        bvy = -bvy;
    }
    if (bottomFace > ch) {
        bvy = -bvy;
    }
}

function aiCalc() {
    // velocity of the ai paddle is slower than the ball but tracks the ball's y velocity
    if (p2y + unit < bpy) {
        p2y += aiv;
    } else {
        p2y -= aiv;
    }
    
    // keeps ai paddle from overflowing
    if (p2y + 3*unit >= ch) {
        p2y -= aiv;
    }
}

window.onload = gameLoop();
