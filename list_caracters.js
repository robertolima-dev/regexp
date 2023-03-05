const text = 'Rua D. Afonso Henriques'

// list
console.log(text.match(/[hfn]/gi))
// pipe
console.log(text.match(/h|f|n/gi))

const vogais = text.match(/[aeiou]/g)
console.log(vogais)

const text2 = `
Inês foi comprar pão.
Ines foi comprar pão.
Inés foi comprar pão.
Inès foi comprar pão.
inEs foi comprar pão.
inÊs foi comprar pão.
`
console.log(text2.match(/[Ii][Nn][eéêèEÉÊÈ][sS]/g))
console.log(text2.match(/[^IaTls]/g))
