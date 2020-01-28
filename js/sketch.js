var font;

function preload() {
    font = loadFont(fontPath);
}

function setup() {
    canvas = createCanvas(canvasWidth, canvasHeight);
}
function draw() {
    backround(0);
    textFont(font);
}