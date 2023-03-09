// 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = true

if (pao && queijo){
    console.log('eu tomo café')
} else if (pao || queijo) {
    console.log('talvez eu tomo café')
} else if (!pao) {
    console.log('não tomo café')
}