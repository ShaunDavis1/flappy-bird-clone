// board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// mario
let marioWidth = 34;
let marioHeight = 24;
let marioX = boardWidth/8;
let marioY = boardHeight/2;
let marioImg;

let mario = {
    x: marioX,
    y: marioY,
    width: marioWidth,
    height: marioHeight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // This allows us to draw on the board

    // draw mario
    // context.fillStyle = "green";
    context.fillRect(mario.x, mario.y, mario.width, mario.height);

    // load images
    marioImg = new Image();
    marioImg.src = "./mario.png";
    marioImg.onload = function () {
    context.drawImage(marioImg, mario.x, mario.y, mario.width, mario.height);
    }
}