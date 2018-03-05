import React, { Component } from 'react';
import { Collapse, Button, CardBody, CardHeader, Card } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { detail as detailPokemon } from '../../modules/pokemon';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle(pokemon) {
    this.setState({ collapse: !this.state.collapse });
    if (this.state.collapse) {
      this.props.detailPokemon(pokemon);
    }
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <Button
              color="primary"
              onClick={this.toggle(this.props.data)}
              style={{ marginBottom: '1rem' }}>
              {this.props.data.name}
            </Button>
          </CardHeader>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              {this.props.pokemon.ability}
              <a href={this.props.data.url} target="_blank">
                Mais detalhes
              </a>
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
