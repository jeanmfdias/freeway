let backgroundRoad
let imageActor
let imageCar1
let imageCar2
let imageCar3

let xCar = 600

let yActor = 368

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
    showActor()
    showCar()
    moveCar()
    moveActor()
}

function showActor() {
    image(imageActor, 100, yActor, 26, 26)
}

function showCar() {
    image(imageCar1, xCar, 40, 50, 40)
}

function moveCar() {
    xCar -= 2
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 2
    }
    if (keyIsDown(DOWN_ARROW)) {
        yActor += 2
    }
}