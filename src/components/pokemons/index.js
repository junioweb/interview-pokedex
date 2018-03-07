import React, { Component } from 'react';
import { Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Pokemon from '../pokemon';

class Pokemons extends Component {
  constructor(props) {
    super(props);
    this.mountPokemons = this.mountPokemons.bind(this);
  }

  mountPokemons(pokemons) {
    const data = pokemons || [];

    return data.map((pokemon, key) => (
      <div key={key} className="col-3">
        <Pokemon data={pokemon} />
      </div>
    ));
  }

  render() {
    const ViewPagination = () => {
      if (this.props.data.count) {
        return (
          <Row className="d-flex justify-content-center mt-4">
            <Pagination>
              <PaginationItem disabled={!this.props.data.previous}>
                <PaginationLink
                  onClick={() =>
                    this.props.changeList(this.props.data.previous)
                  }>
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!this.props.data.next}>
                <PaginationLink
                  onClick={() => this.props.changeList(this.props.data.next)}>
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Row>
        );
      }

      return null;
    };

    return (
      <div>
        <Row>{this.mountPokemons(this.props.data.results)}</Row>
        <ViewPagination />
      </div>
    );
  }
}

export default Pokemons;
