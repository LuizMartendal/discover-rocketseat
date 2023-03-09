const input = document.querySelector('input')

input.onkeydown = form() {
    console.log('Quando aperta ele escreve aqui')
}

input.onkeyup = form() {
    console.log('Quando solta ele escreve aqui')
}

input.onkeypress = form() {
    console.log('Quando segurar ele escreve aqui')
}