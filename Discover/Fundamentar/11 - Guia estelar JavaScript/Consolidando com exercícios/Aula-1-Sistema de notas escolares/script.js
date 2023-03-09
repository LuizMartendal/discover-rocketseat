/* 
    Transformar notas escolares

    crie um algoritmo que transforme notas de sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima A
    * entre 80 e 89 B
    * entre 70 e 79 C
    * entre 60 e 69 D
    * menor que 60 F
*/

function converterNota(nota) {
    let notaCaracter

    if (nota >= 90) {
        notaCaracter = 'A'
    } else if (nota >= 80 && nota <= 89){
        notaCaracter = 'B'
    } else if (nota >= 70 && nota <= 79) {
        notaCaracter = 'C'
    } else if (nota >= 60 && nota <= 69) {
        notaCaracter = 'D'
    } else if (nota < 60 && nota >= 0) {
        notaCaracter = 'F'
    } else {
        throw 'nota inválida'
    }

    return notaCaracter
}

try {
    console.log(converterNota(-1))
} catch (e){
    console.log(e)
}
