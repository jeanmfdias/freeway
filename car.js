let xCar1 = 600
let yCar1 = 40

let xCar2 = 600
let yCar2 = 150

let xCar3 = 600
let yCar3 = 262

let speedCar1 = 2
let speedCar2 = 3
let speedCar3 = 2.5

function showCar() {
    image(imageCar1, xCar1, yCar1, 50, 40)
    image(imageCar2, xCar2, yCar2, 50, 40)
    image(imageCar3, xCar3, yCar3, 50, 40)
}

function moveCar() {
    xCar1 -= speedCar1
    xCar2 -= speedCar2
    xCar3 -= speedCar3
}