document.addEventListener('mousemove', parallax)

function parallax(e) {
    this.querySelectorAll('.layer').forEach((layer) => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth = e.pageX * speed) / 100
        const y = (window.innerHeight = e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

const button = document.querySelector('#button')
const frontBlock = document.querySelector('.front-block')
let frontBlockBool = false
button.addEventListener('click', () => {
    if (frontBlockBool === false) {
        frontBlock.style.left = '47%'
        frontBlockBool = true
    } else if (frontBlockBool === true) {
        frontBlock.style.left = '28%'
        frontBlockBool = false
    }
})