//Desestruturação de vetor

let frutas = ['laranja', 'banana', 'maçã']

//A desestruturação cria variáveis avulsas e atribui os elementos do vetor, EM ORDEM, a cada uma delas

let [fruta1, fruta2, fruta3] = frutas

console.log({fruta1, fruta2, fruta3})


//Desestruturação parcial: 1a e 2a frutas

let[f1, f2] = frutas
console.log({f1, f2})


//Desestruturação parcial: 1a e 3a frutas

let[g1, , g3] = frutas     //para pular algum valor, deixa a vírgula e o espaço correspondente a ele
console.log({g1, g3})

//Desestruturação parcial: 2a e 3a frutas

let [, h2, h3] = frutas    // aqui deixamos o 1o valor ausente
console.log({h2, h3})

/*****************************************************************************************************/

//Problema: troca de valores entre variáveis (swap)

let x = 5;
let y = 10;  //pode ser let x = 5, y = 10

console.log('Antes do swap:', {x, y});   //É importante colocar o ; ao final do console
 
//Swap
// let aux = x
// x = y
// y = aux

//console.log('Depois de swap:', {x, y})

//Swap usando desestruturação. É importante colocar o ; ao final do console

[x, y] = [y, x]
console.log('Depois do swap:', {x, y});

/**************************************************************************************************/

//Desestruturação de objetos

let pessoa = {
    nome: 'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2010-04-29',
    email: 'orkutilson@gmail.com'
}

//Na desestruturação de objetos, as variáveis avulsas:
//1) PRECISAM ter o MESMO NOME das propriedades do objeto
//2) Podem ser especificadas em qualquer ordem
//3) Pode ser feita a desestruturação parcial

let{ sexo, nome, email } = pessoa

console.log({nome, sexo, email})