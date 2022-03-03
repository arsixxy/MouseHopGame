class Platform {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 80
        this.height = 10
        this.velocityY = 0
        this.gravity = 1.5
        this.jumpPower = 30
    }
    render() {
        ctx.fillStyle = 'white'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.position.y -= this.velocityY
        this.velocityY += this.gravity

        if (this.position.y - 8<= playerY + playerHeight && this.position.y + this.height + this.velocityY>= playerY && this.position.x <= playerX + playerWidth && this.position.x + this.width >= playerX && this.velocityY > 10) {
            platformJump()
        }
    }
}