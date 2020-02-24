let yActor = 368
let xActor = 100

function showActor() {
    image(imageActor, xActor, yActor, 26, 26)
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 2
    }
    if (keyIsDown(DOWN_ARROW)) {
        yActor += 2
    }
}