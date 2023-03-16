// Função que calcula a área de uma figura geométrica plana

//O parâmetro forma fica predefinido com o valor 'R'. 
//Se o valor desse parâmetro não for passado, a função
//irá assumir que se trata de um retângulo

function calcular_area(base, altura, forma = 'R') { //antes estava somente forma como parâmetro, agora temos 'R' como parâmetro predefinido
  switch(forma) {
    case 'R':   // Retângulo
      return base * altura
    case 'T':   // Triângulo
      return base * altura / 2
    case 'E':   // Elipse/círculo
      return (base / 2) * (altura / 2) * Math.PI
    default:    // Forma desconhecida
      return null
  }
}

console.log(`Área retângulo 12x16: ${calcular_area(12, 16, 'R')}`)
console.log(`Área triângulo 15x9: ${calcular_area(15, 9, 'T')}`)
console.log(`Área elipse 10x18: ${calcular_area(10, 18, 'E')}`)
console.log(`Área forma desconhecida 7x13: ${calcular_area(7, 13, 'A')}`)


//Deixando de passar o parâmetro da forma
console.log(`A área do retângulo 10x25: ${calcular_area(10,25)}`) //passamos somente base e altura como parâmetros

/* Regras para uso de parêmetros predefinidos em funções:
1. O parâmetro predefinido deve vir sempre por último na lista de parâmetros.
2. Pode haver mais de um parâmetro predefinido, mas eles devem vir sempre no final da lista de parâmetros.*/