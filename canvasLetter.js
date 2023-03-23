function drawLetter(letter, fontMulti, clicked) {
    
    const canvasCon = document.getElementById("canvasContainer")
    canvasCon.style.width = "80vw";
    canvasCon.style.height = "70vh";
    
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')

    canvas.width = canvasCon.clientWidth;
    canvas.height = canvasCon.clientHeight;

    // Controls canvas background color
    canvas.style.background = "white"

    // Controls color, font
    const fontFamily = 'Serif';
    const fontColor = 'white';


    // Controls letter size
    if (canvas.width > canvas.height) {
        fontSize = canvas.height * fontMulti;
    } else {
        fontSize = canvas.width * fontMulti;
    };

    ctx.font = `${fontSize}px ${fontFamily}`;


    // Controls particle size and color. Color is relative to text color & should be specfied as a value betweern + or - 1 and 255
    const partSize = 10;
    const partGridSpacing = 15;
    const partColorR = -255;
    const partColorG = -255;
    const partColorB = -255;
    const partColorA = 0;

    // Letter controls main
    ctx.fillStyle = fontColor
    
    // Centers letter horiz
    ctx.textAlign = "center";
    // Centers the letter vetically
    ctx.textBaseline = "middle";

    
    var metrics = ctx.measureText(letter);
    var width = metrics.width;
    var height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    // Draws letter and centers it verticle
    ctx.fillText(letter, canvas.width/2, canvas.height/2 + height/2 - metrics.actualBoundingBoxDescent);  
    // get the pixel data for the image
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // create an array to store the particles
    var particles = [];

    // Controls grid spacing. Loop over the pixel data to create particles & grid.
    for (var y = 0; y < imageData.height; y += partGridSpacing) {
        for (var x = 0; x < imageData.width; x += partGridSpacing) {
        // get the pixel data for the current pixel
        var pixelIndex = (y * imageData.width + x) * 4;
        var r = imageData.data[pixelIndex];
        var g = imageData.data[pixelIndex + 1];
        var b = imageData.data[pixelIndex + 2];
        var a = imageData.data[pixelIndex + 3];

        // create a new particle with the color of the pixel
        var particle = {
            x: x,
            y: y,

            color: `rgba(${r + partColorR}, ${g + partColorG}, ${b + partColorB}, ${a + partColorA})`
        };

        // add the particle to the array
        particles.push(particle);
        }
    }

    // Particle button
    if (clicked == true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return partChangeRect()
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return partChangeCircles()
    }
    

    // Particles to squares
    function partChangeRect() {
        // Draw rectangle particles
        for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = particle.color;
        // Controls size and position of squares
        ctx.strokeRect(particle.x, particle.y, partSize, partSize);
        }
    }

    // Particles to circles
    function partChangeCircles() {
        // Draw circular particles
        for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        // Controls size and position of circles
        ctx.arc(particle.x + partSize/2, particle.y + partSize/2, partSize/1.5, 0, 2 * Math.PI);
        ctx.fill();
        }
    }
}

function ifText(text) {
    if (text) {
        drawLetter(text, fontMulti, clicked);
    } else {
        drawLetter("a", fontMulti, clicked);
    }
}


// Clicked circles squares button
const butCirc = document.getElementById('butCirc');
const butSquare = document.getElementById('butSquare');
butCirc.style.display = "none";
let partButton = document.getElementById('partButton');
let clicked = false;
partButton.addEventListener('click', function() {
    clicked = !clicked;
    if (clicked) {
        butCirc.style.display = "";
        butSquare.style.display = "none";
    } else {
        butSquare.style.display = "";
        butCirc.style.display = "none";
    }
    ifText(text)
})


// Size slider
let fontslider = document.getElementById('sizeSlider');
let fontMulti = fontslider.value;
fontslider.addEventListener("input", function(e) {
    fontMulti = e.target.value;
    ifText(text)
});


// User enter key - Check for letter value
let text;
text ? text = text : text = 'a';
const onKeyUp = (e) => {
    if (/^[a-z]$/i.test(event.key)) {
        text = e.key;
    } else {
        text = text;
    }
    drawLetter(text, fontMulti, clicked);
};
  

document.addEventListener("load", drawLetter("a", fontMulti, clicked));
document.addEventListener("keyup", onKeyUp);

window.addEventListener('resize', function(){
    ifText(text)
});