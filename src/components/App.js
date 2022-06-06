import React, { Component } from 'react';
import './styles/App.css'
import PokeList from './PokeList'; //lista todos os pokémons
import DetailView from './DetailView'; //visão detalhada de um pokémon
import './styles/App.css';
class App extends Component {
  constructor() { //incialização do estado do componente
    super();
    this.state = {};
  }
  render() { //retorna o elemento criado
    return (
      <div className = "App">
        <PokeList />
        <DetailView />
      </div>
    );
  }
}
export default App;
