import React, { Component } from 'react';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { list as listPokemons, changeList } from '../../modules/pokemon';
import Pokemons from '../pokemons';
import Loading from '../../components/loading';

import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';

class Home extends Component {
  componentDidMount() {
    this.props.listPokemons();
  }

  render() {
    const Home = props => {
      if (_.isEmpty(props.pokemons)) {
        return <Loading />;
      }

      return <Pokemons data={props.pokemons} changeList={props.changeList} />;
    };

    return (
      <Container>
        <Row className="my-4">
          <Col xs="4">
            <InputGroup>
              <Input placeholder="search by name or number" />
              <InputGroupAddon addonType="append">
                <Button>search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Home
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
  pokemons: state.pokemon.list,
  isIncrementing: state.pokemon.isIncrementing,
  isDecrementing: state.pokemon.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listPokemons,
      changeList,
      alterPage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
