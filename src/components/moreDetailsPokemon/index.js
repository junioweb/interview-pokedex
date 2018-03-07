import React from 'react';
import { Modal, ModalHeader, Button, ModalBody, ModalFooter, Table } from 'reactstrap';

const MoreDetailsPokemon = props => (
  <Modal size="sm" isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
    <ModalHeader toggle={props.toggle}>Datasheet</ModalHeader>
    <ModalBody>
      <img
        src={props.data.sprites.front_default}
        className="rounded mx-auto d-block"
        alt={'Front default ' + props.data.name}
      />
      <p className="lead">
        <strong>Name:</strong> {props.data.name}
      </p>
      <p className="lead">
        <strong>Weight:</strong> {props.data.weight}
      </p>
      <p className="lead">
        <strong>Height:</strong> {props.data.height}
      </p>
      <p className="lead">
        <strong>Types:</strong>
      </p>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
        </tr>
        </tbody>
      </Table>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={props.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

export default MoreDetailsPokemon;
