// set up the canvas and context
var canvasCon = document.getElementById('welcome');
var canvas = document.getElementById('starCan');
var ctx = canvas.getContext("2d");

canvas.height = canvasCon.clientHeight;
canvas.width = canvasCon.clientWidth;

// constants
const COLOR_SPACE = "rgba(0,0,0,0)";
const COLOR_STARS = "#044ace";
const STAR_NUM = 30; // number of stars in the starfield
const STAR_SIZE = 0.003; // max star size as a fraction of screen width
const STAR_SPEED = 0.01; // fraction of screen width per second
const stroke = 1; // Line width.

function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1;
}

// set up the stars
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * randomSign() * Math.random();

function starCreate() {
    // Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
    var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
    for (let i = 0; i < STAR_NUM; i++) {
        let speedMult = Math.random() * 1.5 + 0.5;
        stars[i] = {
            r: (Math.random() + 1) * STAR_SIZE * canvas.width / 1,
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            xv: xv * speedMult,
            yv: yv * speedMult
        }
    }
}

starCreate();

// set up the animation loop
var timeDelta, timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // calculate the time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;

    // space background
    ctx.fillStyle = COLOR_SPACE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the stars
    ctx.fillStyle = COLOR_STARS;
    for (let i = 0; i < STAR_NUM; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.lineWidth = stroke;
        ctx.stroke();

        // update the star's x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].r) {
            stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
            stars[i].x = 0 - stars[i].r;
        }
        
        // update the star's y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].y < 0 - stars[i].r) {
            stars[i].y = canvas.height + stars[i].r;
        } else if (stars[i].y > canvas.height + stars[i].r) {
            stars[i].y = 0 - stars[i].r;
        }
    }

    // call the next frame
    requestAnimationFrame(loop);
}

window.addEventListener('resize', function(){
    canvas.height = canvasCon.clientHeight;
    canvas.width = canvasCon.clientWidth;
    starCreate();
});