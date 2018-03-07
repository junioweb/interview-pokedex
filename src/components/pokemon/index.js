import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { detail as detailPokemon } from '../../modules/pokemon';
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
    this.state = {
      collapse: false,
      pokemon: {}
    };
  }

  toggle(pokemon) {
    this.setState((prevState, props) => {
      if (!prevState.collapse) {
        this.props
          .detailPokemon(pokemon)
          .then(response => this.setState({ pokemon: response.payload }));
      }

      return {
        collapse: !prevState.collapse,
        pokemon: props.pokemon
      };
    });
  }

  render() {
    const Details = props => {
      if (_.isEmpty(props.data)) {
        return <Loading className="loading-pokemons" />;
      }

      return <DetailsPokemon pokemon={props.data} />;
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
                  <Details data={this.state.pokemon} />
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
  pokemon: state.pokemon.detail
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      detailPokemon
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
