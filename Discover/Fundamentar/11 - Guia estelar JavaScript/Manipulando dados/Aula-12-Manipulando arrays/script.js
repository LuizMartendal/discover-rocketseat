// Manipulando arrays

let techs = ["html", "css", "js"]
console.log(techs)
// adicionar um item no fim
console.log(techs.push("node js"))
// adicionar no começo
console.log(techs.unshift("sql"))
// remover do fim
console.log(techs.pop())
// remover do começo
console.log(techs.shift())
// pegar somente alguns elementos do array
console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
console.log(techs.splice(1,2)) // começa na posição 1 e retira os próximos dois
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)





