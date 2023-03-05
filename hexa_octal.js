
// Hexadecimal
console.log('\xA9')

// Octal
console.log('\251')

const text = '©@#$%ˆ&*()_-+={}[]""'

// Hexadecimal
console.log(text.match(/\xA9/g))

// Octal
console.log(text.match(/\251/g))
