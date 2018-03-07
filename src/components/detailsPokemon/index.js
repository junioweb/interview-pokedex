import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';
import MoreDetails from '../moreDetailsPokemon';

class DetailsPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const ResolveButton = props => {
      if (props.inserted) {
        return (
          <Button color="danger" onClick={props.removeFromPokedex}>
            remove <small>pokedex</small>
          </Button>
        );
      }

      return (
        <Button color="success" onClick={props.addInPokedex}>
          add to pokedex
        </Button>
      );
    };

    return (
      <div className="details">
        <Row>
          <Col>
            <img
              src={this.props.pokemon.sprites.front_default}
              className="rounded mx-auto d-block"
              alt={'Front default ' + this.props.pokemon.name}
            />
            <p className="lead">
              <strong>Name:</strong> {this.props.pokemon.name}
            </p>
            <p className="lead">
              <strong>Weight:</strong> {this.props.pokemon.weight}
            </p>
            <p className="lead">
              <strong>Height:</strong> {this.props.pokemon.height}
            </p>
            <div className="d-flex justify-content-center">
              <ButtonGroup>
                <ResolveButton {...this.props} />{' '}
                <Button
                  outline
                  color="primary"
                  onClick={this.toggle}>
                  more details
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <MoreDetails
            data={this.props.pokemon}
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}/>
        </Row>
      </div>
    )
  }
};

export default DetailsPokemon;
