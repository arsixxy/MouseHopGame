window.addEventListener('showEndMenu', () => {
setTimeout(() =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    var endMenu = document.getElementById('endMenu')
    endMenu.style= "display: block"    
}, 500)
})

