import React, { Component } from 'react';
import Pokemon from '../pokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.mountPokemons = this.mountPokemons.bind(this);
  }

  mountPokemons(pokemons) {
    const data = pokemons || [];

    return data.map((pokemon, key) => (
      <div key={key} className="col-3">
        <Pokemon data={pokemon} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.mountPokemons(this.props.pokemons.results)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
