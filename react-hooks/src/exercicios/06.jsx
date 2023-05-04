import * as React from 'react'
// 🐨 você vai precisar dos seguintes itens de '../pokemon':
// fetchPokemon: a função que retorna as informações do pokémon
// PokemonInfoFallback: o que é exibido enquanto as informações do pokémon
// são carregadas
// PokemonDataView: o componente usado para exibir as informações do pokémon
import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView } from '../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 crie o estado para o pokémon (null)
  // const [pokemon, setPokemon] = React.useState(null)
  // const [error, setError] = React.useState(null)
  // const [status, setStatus] = React.useState('idle') //aguardando informações. Vai gerar uma terceira atualização
  //abaixo: vamos resolver todas essas variáveis de estado avulsas, por isso, comentamos o modo anterior (acima)

  const [state, setState] = React.useState({ //para criar objeto, abre {}
    pokemon: null,
    error: null,
    status: 'idle'
  })

  //criando constantes somente leitura por meio de desestruturação
  const {pokemon, error, status} = state //aqui desmontamos a variável state em 3 

  // 🐨 crie React.useEffect de modo a ser chamado sempre que pokemonName mudar.
  // 💰 NÃO SE ESQUEÇA DO VETOR DE DEPENDÊNCIAS!
  React.useEffect(() => {
    // 💰 se pokemonName é falso (ou uma string vazia) não se preocupe em fazer 
  // a requisição (retorne precocemente).
  if (! pokemonName) return

  // 🐨 antes de chamar `fetchPokemon`, limpe o estado atual do pokemon
  // ajustando-o para null.
  //setPokemon(null) //limpa qq info de pokemon anterior
  //setError(null) //cada um desses set vai gerar atualização, ou seja, vai atualizar 2 vezes. é um gerenciamento melhor do q antes

    setState({pokemon: null, error:null, status: 'pending'}) //atualiza os 3 campos de uma vez. Tem obj com 3 campos e atualiza isso.
  // (Isso é para habilitar o estado de carregamento ao alternar entre diferentes
  // pokémon.)
  // 💰 Use a função `fetchPokemon` para buscar um pokémon pelo seu nome:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => {/* atualize todos os estados aqui */},
  //   )
  // setStatus('pending') //requisição feita, aguardando desfecho
  
  fetchPokemon(pokemonName).then( //Requisição deu certo!
    pokemonData => {
      // setPokemon(pokemonData) //o q foi recebido do be, foi colocado numa variavel de estado setPokemon
      // setStatus('resolved') //Promessa cumprida

      setState({...state, pokemon: pokemonData, status: 'resolved'}) //...state faz cópia do state e copia os campos q queremos mudar
    }
  )

  .catch( //Requisição deu errado!
  error => {
    // setError(error)  
    // setStatus('rejected') //promessa frustrada

    setState({...state, error, status: 'rejected'}) //error é variável de estado e o valor tem o mesmo nome. Pode usar o propriedade abreviada (error:error - abrevia para somente error)
  }
  //error => {
    //console.error(error)
    //alert('Deu erro, verifique o console')
    //}
  )  
  //console.count('ATUALIZOU O COMPONENTE')

}, [pokemonName]) // [] dentro vai ser a variavel q vai ser vigiada

//useEffect PARA CONTAGEM DE ATUALIZAÇÕES
React.useEffect(() => {
  console.count('Atualizou o componente')
  console.log({state})
})

// 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
// 🐨 retorne o seguinte baseado nos estados `pokemon` e `pokemonName`:
//   1. não há pokemonName: 'Informe um pokémon'
//   2. tem pokemonName mas não pokemon: <PokemonInfoFallback name={pokemonName} />
//   3. tem pokemon: <PokemonDataView pokemon={pokemon} />

  switch(status){
    case 'idle':
      return 'Informe Pokemon'
    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />
    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />
    default: //rejected
    return (
      <div role="alert">
        Houve um erro:
        <pre style= {{whitespace: 'normal'}}>
          {error.message} 
        </pre>
      </div>
    )
  }
// if(error) return (
//   <div role="alert">
//     Houve um erro:
//     <pre style= {{whitespace: 'normal'}}>
//       {error.message} 
//     </pre>
//   </div>
// )
// else if(! pokemonName) return 'Informe um pokemon'
// else if(pokemonName && !pokemon) return <PokemonInfoFallback name={pokemonName} />
// else if(pokemon) return <PokemonDataView pokemon={pokemon} />

  // 💣 remova isso
  //return 'TODO'
}

function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
      
    </div>
    
  )
}

export default Exercicio06