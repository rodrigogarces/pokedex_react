import React, { Component } from 'react';
import './styles/App.css'
import PokeList from './PokeList'; //importa pokelist
class App extends Component {
  constructor() { //incialização do estado do componente
    super();
    this.state = {};
  }
  render() { //retorna o elemento criado
    return (
      <div className = "App">
        <PokeList />
      </div>
    );
  }
}
export default App;
