const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    const body = document.querySelector('body')
    body.append('fim do programa')
}