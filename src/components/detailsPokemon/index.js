import React from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';

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

const DetailsPokemon = props => (
  <div className="details">
    <Row>
      <Col>
        <img
          src={props.pokemon.sprites.front_default}
          className="rounded mx-auto d-block"
          alt={'Front default ' + props.pokemon.name}
        />
        <p className="lead">
          <strong>Name:</strong> {props.pokemon.name}
        </p>
        <p className="lead">
          <strong>Weight:</strong> {props.pokemon.weight}
        </p>
        <p className="lead">
          <strong>Height:</strong> {props.pokemon.height}
        </p>
        <div className="d-flex justify-content-center">
          <ButtonGroup>
            <ResolveButton {...props} />{' '}
            <Button outline color="primary">
              more details
            </Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  </div>
);

export default DetailsPokemon;
