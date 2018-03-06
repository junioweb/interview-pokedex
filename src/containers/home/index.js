import React, { Component } from 'react';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { list as listPokemons } from '../../modules/pokemon';
import Pokedex from '../pokedex';
import Loading from '../../components/loading';

import { Row, Col } from 'reactstrap';

class Home extends Component {
  componentDidMount() {
    this.props.listPokemons();
  }

  render() {
    const Home = props => {
      if (_.isEmpty(props.pokemons)) {
        return <Loading />;
      }

      return <Pokedex pokemons={props.pokemons} />;
    };

    return (
      <div>
        <Row>
          <Col>
            <h3>Busca</h3>
            <Home pokemons={this.props.pokemons} />
          </Col>
        </Row>
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
