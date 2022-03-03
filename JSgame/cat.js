class Cat {
    constructor(speed, acceleration, height){
        this.speed = speed
        this.acceleration = acceleration
        this.width = canvas.width
        this.height = height
        this.position = {
            x: 0,
            y: platforms[0].position.y + this.height / 2
        }
    }
    render(){
        ctx.drawImage(catImg, this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.position.y -= this.speed
        this.position.y -= platforms[0].velocityY
    }
}