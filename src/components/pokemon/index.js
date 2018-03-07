import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { detail as detailPokemon } from '../../modules/pokemon';
import { add as addPokemon } from '../../modules/pokedex';
import { remove as removePokemon } from '../../modules/pokedex';
import DetailsPokemon from '../detailsPokemon';
import Loading from '../loading';
import {
  Collapse,
  Button,
  CardBody,
  CardHeader,
  Card,
  Row,
  Col
} from 'reactstrap';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.addInPokedex = this.addInPokedex.bind(this);
    this.removeFromPokedex = this.removeFromPokedex.bind(this);
    this.state = {
      collapse: false,
      pokemon: {},
      inserted: false
    };
  }

  componentDidMount(prevProps, prevState) {
    const inserted = this.props.pokemons.some(
      pokemon => pokemon.name === this.props.data.name
    );

    if (inserted) {
      this.setState({ inserted: true });
    }
  }

  toggle(pokemon) {
    this.setState((prevState, props) => {
      if (!prevState.collapse && props.data.url) {
        this.props
          .detailPokemon(pokemon)
          .then(response => this.setState({ pokemon: response.payload }));
      }

      return {
        collapse: !prevState.collapse,
        pokemon: props.data.url ? props.pokemon : props.data
      };
    });
  }

  addInPokedex(pokemon) {
    this.props.addPokemon(pokemon);
    this.setState({ inserted: true });
  }

  removeFromPokedex(pokemon) {
    this.props.removePokemon(pokemon);
    this.setState({ inserted: false });
  }

  render() {
    const DetailsBody = props => {
      if (_.isEmpty(props.data)) {
        return <Loading className="loading-pokemons" />;
      }

      return (
        <DetailsPokemon
          pokemon={props.data}
          addInPokedex={() => props.addInPokedex(props.data)}
          removeFromPokedex={() => props.removeFromPokedex(props.data)}
          inserted={this.state.inserted}
        />
      );
    };

    return (
      <div>
        <Card className="pokemon">
          <CardHeader>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => this.toggle(this.props.data)}>
              {this.props.data.name}
            </Button>
          </CardHeader>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <Row>
                <Col>
                  <DetailsBody
                    data={this.state.pokemon}
                    addInPokedex={this.addInPokedex}
                    removeFromPokedex={this.removeFromPokedex}
                  />
                </Col>
              </Row>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokedex.list.results
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPokemon,
      removePokemon,
      detailPokemon
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
