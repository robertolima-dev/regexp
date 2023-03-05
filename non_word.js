const text = 'Meu nome é Roberto, tudo bem? Qual a % do valor? \n\n Tem essa resposta? \n Tenho!!'

console.log(text.match(/[^a-zA-Z0-9_]/g))
console.log(text.match(/\W/g))
