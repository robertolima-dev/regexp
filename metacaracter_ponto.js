const slugs = 'Pereira, Cunha, Moreira, Fonseca, Ferreira, Lopes, Alexandrino, Silva, Macieira'

console.log(slugs.match(/i.v/g))
console.log(slugs.match(/e.r/g))

const kings = 'D.Sancho II, S.Afonso III, D.Diniz I, D.Pedro IV, D.Fernando I'

// metacaracter
console.log(kings.match(/D.S/g))
// literal com sequencia de scape
console.log(kings.match(/D\.S/g))

console.log(kings.match(/a.c/g))

const notes = '1,2,3,4,5,6,7,8,9'

// metacaracter
console.log(notes.match(/1.2/g))
// literal com sequencia de scape
console.log(notes.match(/1\,2/g))

console.log(notes.match(/1..,/g))

const notes2 = '8.3,7.1,8.8,9.7,10.0'

console.log(notes2.match(/8../g))
console.log(notes2.match(/.\../g))
