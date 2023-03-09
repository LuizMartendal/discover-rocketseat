// for 
// break
// continue


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j)

        if (j == 5) {
            continue // pula o 5
        }

        if (j == 10) {
            break // para o ciclo
        }
   }
   console.log()
}