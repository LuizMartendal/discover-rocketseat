let person = {
    name: 'luiz',
    age: 20,
    weight: 61
}

for (let property in person) {
    console.log(person[property])
}