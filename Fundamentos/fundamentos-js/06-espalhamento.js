//Encontrando o menor e o maior número
//em uma série

let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo}) //com chave, para criar o objeto, e trazer o nome e o valor (propriedade abreviada)


//E se os números estivessem dentro de um vetor?

let nums = [2, -7, 8, 4, 0]

//Passando o vetor para Math.min() e Math.max()
//minimo = Math.min(nums)         Não funciona
//maximo = Math.max(nums)         Não funciona

//console.log({minimo, maximo})

//A sintaxe de espalhamento ou spreading (representada por ...antes da variável)
//é capaz de "desempacotar" um vetor em uma série de valores avulsos. Espalhamento pode ser usado com vetor ou objeto.

minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})

console.log('Vetor "empacotado":', nums)    //aqui aparece o vetor dentro do []. Não dá para usar com string template (entre crases)
console.log('Vetor "desempacotado":', ...nums)    //aqui aparecem somente valores (fora do []). Não dá para usar com string template (entre crases)



/**********************************************************************************************************************/

let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}

//Copiando carro1 para o carro2

//let carro2 = carro1    //NÃO FUNCIONA. Ficam 2 opalas no terminal qd roda. Carro2 e carro1 acabam ficando no mesmo espaço de memória.

//Usando espalhamento para duplicar corretamente um objeto

let carro2 = {...carro1}   //agora sim, vai ter um outro espaço de memória com as propriedades copiadas do carro 1, porem referindo ao opala

//Mudando o valro das propriedades do carro2

carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})


/********************************************************************************************************/


//Problema: juntar dois ou mais vetores em um só

let frutas = ['maçã', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rúcula']

//Produzindo um vetor que contém tanto frutas quanto verduras

//let hortifruti = frutas + verduras    NÃO FUNCIONA

//Método que funciona 1: JS clássico

//let hortifruti = frutas.concat(verduras)   //acrescenta vetores dentro do () separados por ,

//Método que funciona 2: usando espalhamento 

let hortifruti = [...frutas, ...verduras]  // acrescenta vetores dentro do [] colocando , ... nome vetor

console.log({hortifruti})


/******************************************************************************************************/

//Problema: como declarar uma função capaz de receber um número arbitrário de argumentos?

console.log('Soma 7 números:', soma(1, 2, 3, 4, 5, 6, 7))
console.log('Soma 12 números:', soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))

//O espalhamento também resolve esse tipo de problema.
//Quando usado em parâmetros de função, passa a ser chamado de PARÂMETRO DE RESTO

function soma(...valores){
    //Dentro da função, o parâmetro de resto se comporta
    //como um vetor

    let res = 0
    for(let valor of valores) res += valor    //a cada rodada, pega o valor da posição, joga na variável valor e soma na variável res
    return res
}