import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { list as listPokemons } from '../../modules/pokemon';
import Pokedex from '../pokedex';

class Home extends Component {
  componentDidMount() {
    this.props.listPokemons();
  }

  render() {
    return (
      <div>
        <Pokedex pokemons={this.props.pokemons} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemon.list,
  isIncrementing: state.pokemon.isIncrementing,
  isDecrementing: state.pokemon.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listPokemons,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
