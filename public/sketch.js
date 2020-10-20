let socket;

function setup() {
    createCanvas(400, 400);
    background(0);

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 0);
    ellipse(data.x, data.y, 30, 30);
}

function mouseDragged() {
    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
    sendMouse(mouseX, mouseY);
}

function sendMouse(x, y) {
    console.log(x + " " + y);

    let data = {
        x,
        y
    }
    socket.emit('mouse', data);
}
