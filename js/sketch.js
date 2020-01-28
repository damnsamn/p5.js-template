var font;

function preload() {
    font = loadFont(fontPath);
}

function setup() {
    canvas = createCanvas(canvasWidth, canvasHeight);
    textFont(font);
}

function draw() {
    background(0);
}
