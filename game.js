let backgroundRoad
let imageActor
let imageCar1
let imageCar2
let imageCar3

function preload() {
    backgroundRoad = loadImage('assets/estrada.png')
    imageActor = loadImage('assets/ator-1.png')
    imageCar1 = loadImage('assets/carro-1.png')
    imageCar2 = loadImage('assets/carro-2.png')
    imageCar3 = loadImage('assets/carro-3.png')
}

function setup() {
    createCanvas(500, 400)
}

function draw() {
    background(backgroundRoad)
    image(imageActor, 100, 368, 26, 26)
    image(imageCar1, 420, 40, 50, 40)
    image(imageCar2, 420, 150, 50, 40)
    image(imageCar3, 420, 264, 50, 40)
}