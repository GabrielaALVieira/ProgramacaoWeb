//alguns dados de um usuário
let fullname = 'Joniscleison Junqueira Junior'
let username = 'junin'
let group = 'alunos'

/*Criando um objeto a partir das variáveis acima.
Note que o nome das propriedades (à esquerda)
coincide com o nome das variáveis (à direita)*/

/*let user = {
    fullname: fullname,
    username: username,
    group: group
}

console.log(user)*/


//Criando um objeto equivalente ao do código acima,
//usando propriedades abreviadas
//Não é necessário repetir o mesmo identificador
//antes e depois do símbolo :

let user = {
    fullname,
    username,
    group
}
console.log(user)

//Um objeto pode misturar propriedades abreviadas e
//propriedades nao abreviadas

let user2 = {
    fullname,
    username,
    password: 'abc123',      //propriedade não abreviada, tem que ser fornecido o valor depois dos : 
    group,
    last_login: '2023-02-16 08:21:43'  //Propriedade não abreviada, tem que ser fornecido o valor depois dos : 
}

console.log(user2)

//Depuração usando propriedades abreviadas
//Exibindo o valor de duas variáveis. Veja que os valores
//são exibidos, mas a saída não informa de quais variáveis
//provém os valores

let x = 10, y = 'batata'   //numa depuração vai aparecer 10 batata e não dá para saber quem vale o q, se x ou y, então é possível melhorar isso
console.log(x, y)

//Saída melhorada: passando um objeto com propriedades
//abreviadas para console.log(), como uma forma de sabermos
//de quais variáveis provém os valores

console.log({x, y})    //assim, quando roda, traz o nome da variável e o valor tbm, não só valor como acima. 
                       //convém colocar entre {} para criar um objeto e assim vai trazer qd rodar, o nome da variável e o valor   
