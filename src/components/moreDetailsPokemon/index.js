import React from 'react';
import {
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  ModalFooter,
  Table
} from 'reactstrap';

const DataTableStats = props => {
  const dados = props.data || [];

  const Rows = () =>
    dados.map((dado, key) => (
      <tr key={key}>
        <td>{dado.stat.name}</td>
        <td>{dado.effort}</td>
        <td>{dado.base_stat}</td>
      </tr>
    ));

  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Effort</th>
          <th>Base Stat</th>
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </Table>
  );
};

const DataTableDefault = props => {
  const dados = props.data || [];

  const Rows = () =>
    dados.map((dado, key) => (
      <tr key={key}>
        <th scope="row">{dado.slot}</th>
        <td>{dado[props.resource].name}</td>
      </tr>
    ));

  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Slot</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </Table>
  );
};

const MoreDetailsPokemon = props => (
  <Modal
    size="sm"
    isOpen={props.isOpen}
    toggle={props.toggle}
    className={props.className}>
    <ModalHeader toggle={props.toggle}>Datasheet</ModalHeader>
    <ModalBody>
      <img
        src={props.data.sprites.front_default}
        className="rounded mx-auto d-block"
        alt={'Front default ' + props.data.name}
      />
      <p>
        <strong>Name:</strong> {props.data.name}
      </p>
      <p>
        <strong>Weight:</strong> {props.data.weight}
      </p>
      <p>
        <strong>Height:</strong> {props.data.height}
      </p>
      <p>
        <strong>Types:</strong>
      </p>
      <DataTableDefault data={props.data.types} resource="type" />
      <p>
        <strong>Abilities:</strong>
      </p>
      <DataTableDefault data={props.data.abilities} resource="ability" />
      <p>
        <strong>Stats:</strong>
      </p>
      <DataTableStats data={props.data.stats} />
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={props.toggle}>
        Close
      </Button>
    </ModalFooter>
  </Modal>
);

export default MoreDetailsPokemon;
