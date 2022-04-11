const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

const keys = {
    Up: {
        pressed: false
    },
    Down: {
        pressed: false
    },
    Left: {
        pressed: false
    },
    Right: {
        pressed: false
    }
}

initialize()

window.addEventListener('keydown', keydown)

window.addEventListener('keyup', keyup)