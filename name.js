const data = [
    {name: 'Roberto Lima'},
    {name: 'Joao Silva'},
    {name: 'Andre Silva'},
    {name: 'Caio Silva'},
]

const myName = 'Roberto'
const nameRegexp = new RegExp(myName)
const filter = data.filter(f => f.name.match(nameRegexp))
console.log(filter)

