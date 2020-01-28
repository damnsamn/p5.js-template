var font;

function preload() {
    font = loadFont(fontPath);
}

function setup() {
    canvas = createCanvas(canvasWidth, canvasHeight);
}
function draw() {
    background(0);
    textFont(font);
}
