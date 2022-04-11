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
    if (true) {
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
        c.drawImage(img1.image,
            img1.position.x,
            img1.position.y)
        c.drawImage(img2.image,
            0,
            0,
            img2.image.width / 4,
            img2.image.height,
            canvas.width / 2 - (img2.image.width / 4) / 2,
            canvas.height / 2 - (img2.image.height / 4) / 2,
            img2.image.width / 4,
            img2.image.height)
    }
}

function keydown(e) {
    let key = e.key
    switch (key) {
        case "ArrowUp":
            keys.Up.pressed = true;
            console.log(keys.Up.pressed)
            break
        case "ArrowRight":
            keys.Right.pressed = true;
            console.log(keys.Right.pressed)
            break
        case "ArrowDown":
            keys.Down.pressed = true;
            console.log(keys.Down.pressed)
            break
        case "ArrowLeft":
            keys.Left.pressed = true;
            console.log(keys.Left.pressed)
            break
    }
}

function keyup(e) {
    let key = e.key
    switch (key) {
        case "ArrowUp":
            keys.Up.pressed = false;
            console.log(keys.Up.pressed)
            break
        case "ArrowRight":
            keys.Right.pressed = false;
            console.log(keys.Right.pressed)
            break
        case "ArrowDown":
            keys.Down.pressed = false;
            console.log(keys.Down.pressed)
            break
        case "ArrowLeft":
            keys.Left.pressed = false;
            console.log(keys.Left.pressed)
            break
    }
}