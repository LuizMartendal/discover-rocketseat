/*
    Celsius em Fahrenheit

    crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = (C * 9/5) + 32
 */

function transformDregree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    let updateDegree = 0

    if (fahrenheitExist){
        updateDegree = Number(degree.toUpperCase().replace('F', ""))
        updateDegree = (updateDegree - 32) * 5/9 + 'C'
    } else if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace('C', ""))
        updateDegree = (updateDegree * 9/5) + 32 + 'F'
    } else {
      throw new Error('Tipo não identificado')
    }

    return updateDegree
}

try {
    console.log(transformDregree('20C'))
    console.log(transformDregree('52F'))
    console.log(transformDregree('10'))
} catch (e) {
    console.log(e)
}