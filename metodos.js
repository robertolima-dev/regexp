const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'


const rexexp9 = RegExp('9')
console.log('Metodos do object RegExp')
// metodo test
console.log('1 =>', rexexp9.test(text))
// metodo exec
console.log('2 =>', rexexp9.exec(text))


const rexexpstring = /[a-f]/g
console.log('Metodos do object String')
// metodo match
console.log('3 =>', text.match(rexexpstring))
// metodo search
console.log('4 =>', text.search(rexexpstring))
// metodo replace
console.log('5 =>', text.replace(rexexpstring, 'encontrei'))
// metodo split
console.log('6 =>', text.split(rexexpstring))
