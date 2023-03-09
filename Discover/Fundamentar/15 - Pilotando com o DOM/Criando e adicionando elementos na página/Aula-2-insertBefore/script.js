const div = document.createElement('div')
div.innerText = "Olá devs"
// insert before
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

// insert after
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)