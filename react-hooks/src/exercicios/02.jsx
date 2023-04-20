import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName

  //Lazy initializer ('atualização preguiçosa')
  //Faz com que o valor inicial de um useState só seja executado
  //durante a fase de carregamento do componente (fase "mount")
  //Para ativar um lazy initializer, basta informar uma chamada de função como valor inicial do useState

  const [name, setName] = React.useState(
    //initialName
    //window.localStorage.getItem('name') ?? initialName  //get pega o item. A info pode existir ou nao. ?? operador de coalescencia de nulos. Se a parte da esquerda nao existir é nula, usa a parte da direita e vice versa.
    //economiza processamento
    () => {
      console.count('carregou')
      return window.localStorage.getItem('name') ?? initialName //aqui é uma função q executa o getItem qd carrega a pagina e nao toda a vez, como estava na linha acima
      }
  ) //como há o Orkutilson, guarda ele, inicialmente, qd atualiza, guarda as novas atualizações no navegador e qd fecha, fica o ultimo nome guardado


  const [count, setCount] = React.useState(0)
  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.count('Atualizou')
  }, [name]) // --> Vetor de dependências
  //O useEffect somente será executado quando a(s) variavel (is)
  //especificadas no vetor de dependencias tiverem seus valores alterados

  //console.count('Atualizou') //atualizar é executar a funçao de novo. Todo o tempo vai ver se tem algo novo no getItem. há forma de executar o carregamento do useState 1x

  function handleChange(event) {
    setName(event.target.value)
    //window.localStorage.setItem('name', name) //guarda o valor da variável name, numa chave chamda name.Tem problema estar aqui. Precisamos ter certeza de que a variável está totalmente atualizada. Pode ser q a variavel ainda nao está totalmente atualizada e reserve algo/estado anterior, como no exercicio de IMC. Nao pode estar aqui esse localStorage, por poder nao estar td atualizado.
  }//localStorage é assincrono, pois nao aguarda o setName terminar a atualização e enquanto isso o local Storage já está reservando essa atualização, sem ter esperado ela terminar de fato. Fica sempre atrasado, se usado no handle change.
  
  function handleClick(event) {
    setCount (count + 1)
  }

  return (
    <div>
      <form>
        <label htmlFor="name" onClick={handleClick}>Name ({count}): </label> 
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName="Orkutilson" />
}

export default Exercicio02