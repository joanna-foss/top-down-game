(function () {
    const canvas = document.querySelector("canvas")
    const c = canvas.getContext("2d")

    initialize()

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
        animate()
    }

    function animate() {
        if(true) {
            window.requestAnimationFrame(animate)
            loadImages()
        }      
    }

    function loadImages() {
        const town_image = new Image()
        town_image.src = "./img/joanna-town.png"

        const player_image = new Image()
        player_image.src = "./img/playerDown.png"

        const background = new Background({
            position: {
                x: -1640,
                y: -760
            },
            image: town_image
        })

        const player = new Sprite({
            position: {
                x: 0,
                y: 0
            },
            image: player_image
        })

        drawImages(background, player)
    }

    function drawImages(img1, img2) {
        img1.image.onload = () => {
            c.fillRect(0, 0, canvas.width, canvas.height)
            c.drawImage(img1.image, img1.position.x, img1.position.y)
            c.drawImage(img2.image,
                0,
                0,
                img2.image.width/4,
                img2.image.height,
                canvas.width/2 - (img2.image.width/4)/2,
                canvas.height/2 - (img2.image.height/4)/2,
                img2.image.width/4,
                img2.image.height)
        }
    }

})();