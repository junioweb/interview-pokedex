import React, { Component } from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { list as listPokemons, changeList } from '../../modules/pokemon';
import PokemonsComponent from '../../components/pokemons';
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

class Pokemons extends Component {
  componentDidMount() {
    this.props.listPokemons();
  }

  render() {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const Page = props => {
      if (_.isEmpty(props.pokemons)) {
        return <Loading />;
      }

      return (
        <PokemonsComponent
          data={props.pokemons}
          changeList={props.changeList}
        />
      );
    };

    return (
      <Container>
        <Row className="my-4">
          <Col xs="4">
            <InputGroup>
              <Input
                innerRef={input => (this.search = input)}
                placeholder="search by name or number"
              />
              <InputGroupAddon addonType="append">
                <Button
                  onClick={() =>
                    this.props.changeList(
                      baseUrl + 'pokemon/' + this.search.value
                    )
                  }>
                  search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <Row>
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
  pokemons: state.pokemon.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listPokemons,
      changeList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
