const nums = [2,3,5,7,11,13,17,19,23,29,31]
const nomes = [`Aurival`, `Joender`, `Neurivânia`, `Terebintina`, `Leucimara`]

//O método map() cria um NOVO VETOR, de tamanho IDÊNTICO ao vetor original,
//em que cada elemento corresponde a uma transformação feita no elemento
//original pela função passada como parâmetro


//map()cria um novo vetor em cada elementoque corresponde ao dobro do valor
//do elemento do vetor original

let dobro = nums.map(n=> n*2)  //vetor que map produzir vai ter mm tamanho do vetor original, mas com alguma aplicação feita, dobro no caso// vetor de filter é menor q vetor original, geralmente

console.log(`Vetor com números dobrados: `, dobro)

//map() que transforma os elementos do vetor original em itens de uma lista para uso em uma página HTML

let itensLista = nomes.map(n=> `<li> ${n} </li>`)  //vai usar mto no react //<li> list item //itens vão aparecer em lista //<br>funciona em html// \n funciona para string

console.log('<h1>Nomes mais bonitos do Brasil</h1>') //lista ordenada// 
console.log('<ul>')
console.log(itensLista)
console.log('</ul>')