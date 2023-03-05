const text = 'Parcela par Parcial paraíso'

// literal
let expressaoRegular = /par/
console.log('1 =>',text.match(expressaoRegular))

let expressaoRegularGlobal = /par/g
console.log('2 =>',text.match(expressaoRegularGlobal))

let expressaoRegularGlobalIgnoreCase = /par/ig
console.log('3 =>',text.match(expressaoRegularGlobalIgnoreCase))

// object RegExp 
let expressaoRegularRegExp = new RegExp('par')
console.log('4 =>', text.match(expressaoRegularRegExp))

let expressaoRegularRegExpGlogal = new RegExp('par', 'g')
console.log('5 =>', text.match(expressaoRegularRegExpGlogal))

let expressaoRegularRegExpGlogalIgnoreCase = new RegExp('par', 'ig')
console.log('6 =>', text.match(expressaoRegularRegExpGlogalIgnoreCase))
