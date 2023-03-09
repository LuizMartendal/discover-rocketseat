// throw

// try catch


function sayMyName(name) {
    if (name == ''){
        throw 'Nome é necessário'
    }

    return name
}

try {
    const myName = sayMyName('Luiz')
    console.log(myName)
} catch (e) {
    console.log(e)
}