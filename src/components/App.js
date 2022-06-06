import React, { Component } from 'react';
import './styles/App.css'
import PokeList from './PokeList'; //lista todos os pokémons
import DetailView from './DetailView'; //visão detalhada de um pokémon
import './styles/App.css'; //estilo da página
import Pokemon from '../Pokemon'; //helper que recebe os dados da API
class App extends Component {
  constructor() { //incialização do estado do componente
    super();
    this.state = {
      pokemon: {} //instancia o pokémon a ser mostrado no detalhe
    };

    this.handleOnClick = this.handleOnClick.bind(this); //mantém o contexto quando envia
  }

  handleOnClick(id){ //pega o id do elemento clicado
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        console.log(pokemon);
        this.setState({pokemon});
      })
      .catch(err => console.log(err));
  }

  render() { //retorna o elemento criado
    return ( //PokeList recebe o id do elemento clicado
      <div className = "App">
        <PokeList handleOnClick = {this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}
export default App;
