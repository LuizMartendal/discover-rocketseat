/* Sistema de gastos familiar

Crie um objeto que possuirá duas propriedades, ambas do tipo array:
    * receitas: []
    * receitas: []
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
    incomes: [100, 20.39, 250],
    expenses: [300, 220, 121.92]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0

    if (itsOk) {
        return 'Positivo'
    }
    return 'Negativo'
}