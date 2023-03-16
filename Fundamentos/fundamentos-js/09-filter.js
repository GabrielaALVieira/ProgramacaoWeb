const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

//O método filter() cria um NOVO VETOR  contendo apenas os elementos do vetor de origem que atendam ao critério da função passada
//como parâmetro


const negativos = numeros.filter(n => n < 0)
const div5 = numeros.filter(i => i % 5 === 0)

const comecaComM = frutas.filter(f => f.charAt(0) === 'm')
const terminaComI = frutas.filter(x => x.slice(-1) === 'i')
const terminaComR = frutas.filter(a => a.slice(-1) === 'r') //se não encontrar, retorna vetor vazio

console.log('Números negativos:', negativos)
console.log('Números divisíveis por 5:', div5)
console.log('Frutas que começam com m:', comecaComM)
console.log('Frutas que terminam com i:', terminaComI)
console.log('Frutas que terminam com r:', terminaComR)