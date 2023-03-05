const text = 'fee fi fo fum'

// literal
const expressaoRegular = /\w+\s/g

const array = text.match(expressaoRegular)
console.log(array)

// construtor
const expressaoRegular2 = new RegExp('\\w+\\s', 'g')

const array2 = text.match(expressaoRegular2)
console.log(array2)

// construtor
const expressaoRegular3 = new RegExp(/\w+\s/, 'g')

const array3 = text.match(expressaoRegular3)
console.log(array3)

// construtor
const expressaoRegular4 = new RegExp(/\w+\s/g)

const array4 = text.match(expressaoRegular4)
console.log(array4)
