var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");

canvas.width = 450
if(window.width < 450) canvas.width == window.width
canvas.height = window.innerHeight;
//playerXYSize
var velocityX = 0
var playerWidth = 74
var playerHeight = 94
var playerX = canvas.width / 2 - playerWidth / 2
var playerY = canvas.height / 2 - playerHeight

//bunch of variables
var keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
}
var platforms = []
var platformY = canvas.height - 150
var platformNumber = 100
for (var p = 0; p < platformNumber; p++) {
    var platformX = Math.floor(Math.random() * canvas.width - 80)
    if (platformX < 0) platformX += 80
    if (p == 0) platformX = canvas.width / 2 - 40
    if (p > 40) platformY -= 230
    else platformY -= 150
    platforms[p] = new Platform(platformX, platformY)
}
var catImg = new Image()
catImg.src = 'img/Cat.png'
var cat = new Cat(3, 2, 800)
setInterval(() =>{
    cat.speed += 0.2
}, 1400)

//events
window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 37: keys.left.pressed = true
            break
        case 39: keys.right.pressed = true
            break
    }
})
window.addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 37: keys.left.pressed = false
            break
        case 39: keys.right.pressed = false
            break
    }

})
function moveLeft(){
    keys.left.pressed = true
}
function stopLeftMove(){
    keys.left.pressed = false
}
function moveRight(){
    keys.right.pressed = true
}
function stopRightMove(){
    keys.right.pressed = false
}
function platformJump(){
    platforms.forEach((e) =>{
        e.velocityY = 0
        e.velocityY -= e.jumpPower
    })
}

const event = new Event('showEndMenu')
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (var a in platforms) {
        platforms[a].render()
        platforms[a].update()
    }
    update()
    render()
    cat.render()
    cat.update()
    if(playerY + playerHeight >= cat.position.y + 60){
        dispatchEvent(event)
        return
    }
    requestAnimationFrame(loop)
}
console.log(cat)

function update() {
    //movement
    playerX += velocityX
    if (keys.right.pressed && playerX + playerWidth < canvas.width - velocityX) {
        velocityX = 10
    }
    else if (keys.left.pressed && playerX > 0 - velocityX) {
        velocityX = -10
    } else velocityX = 0


}


var mouseImg = new Image()
mouseImg.src = 'img/Mouse.png'
function render() {
    ctx.fillStyle = '#7ea2b1'
    ctx.drawImage(mouseImg, playerX, playerY, playerWidth, playerHeight)
}
loop()