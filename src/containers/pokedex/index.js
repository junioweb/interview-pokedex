import React, { Component } from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { list as listPokemons, changeList } from '../../modules/pokedex';
import Pokemons from '../../components/pokemons';
import Loading from '../../components/loading';

import { Container, Row, Col, Alert } from 'reactstrap';

class Pokedex extends Component {
  render() {
    const Page = props => {
      if (_.isEmpty(props.pokemons)) {
        return <Loading />;
      }

      if (_.isEmpty(props.pokemons.results)) {
        return <Alert color="warning">No pokémon has been inserted!</Alert>;
      }

      return <Pokemons data={props.pokemons} changeList={props.changeList} />;
    };

    return (
      <Container>
        <Row className="mt-4">
          <Col>
            <Page
              pokemons={this.props.pokemons}
              changeList={this.props.changeList}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokedex.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listPokemons,
      changeList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
