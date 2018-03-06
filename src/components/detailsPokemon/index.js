import React from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';

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
            <Button color="success">add to pokedex</Button>{' '}
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
