const carros = [`Chevette`, `Fusca`, `Opala`, `Maverick`, `Belina`, `Del Rey`]

//O método includes() testa se um dado elemento existe em um vetor.
//Retorna true se existir ou false, caso contrário

console.log(`Tem Fusca?`, carros.includes(`Fusca`))
console.log(`Tem Corcel?`, carros.includes(`Corcel`))
console.log(`Tem Belina?`, carros.includes(`Belina`))

//Metodo indexof() retorna o indice (posiçao) de um elemento no vetor
//Caso o elemento não exista, retorna o valor -1   //includes é recente, antes usava indexof() para saber se há valor e sua posição

console.log(`Posição de Fusca: `, carros.indexOf(`Fusca`))
console.log(`Posição de Corcel: `, carros.indexOf(`Corcel`))
console.log(`Posição de Belina: `, carros.indexOf(`Belina`))