(function () {
    const canvas = document.querySelector("canvas")
    const c = canvas.getContext("2d")

    initialize()
    animate()

    window.addEventListener('keydown', (event) => {
        let key = event.key
        switch(key) {
            case "ArrowUp": 
                console.log("Pressed Up Key")
                break
            case "ArrowRight":
                console.log("Pressed Right Key")
                break
            case "ArrowDown":
                console.log("Pressed Down Key")
                break
            case "ArrowLeft":
                console.log("Pressed Left Key")
                break
        }
    })

    function initialize() {
        window.addEventListener('resize', resizeCanvas, false)
        resizeCanvas()
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        redraw()
    }

    function redraw() {
        loadImages()
    }

    function loadImages() {
        const town_image = new Image()
        town_image.src = "./img/joanna-town.png"

        const player_image = new Image()
        player_image.src = "./img/playerDown.png"

        drawImages(town_image, player_image)
    }

    function drawImages(background_image, player_image) {
        background_image.onload = () => {
            c.fillRect(0, 0, canvas.width, canvas.height)
            c.drawImage(background_image, -1640, -760)
            c.drawImage(player_image,
                0,
                0,
                player_image.width/4,
                player_image.height,
                canvas.width/2 - (player_image.width/4)/2,
                canvas.height/2 - (player_image.height/4)/2,
                player_image.width/4,
                player_image.height)
        }
    }

    function animate() {
        if(true) {
            window.requestAnimationFrame(animate)
        }
        console.log("animating")
    }

})();