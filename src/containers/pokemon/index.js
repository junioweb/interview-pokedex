import React, { Component } from 'react';
import { Collapse, Button, CardBody, CardHeader, Card } from 'reactstrap';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <Button
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: '1rem' }}>
              {this.props.data.name}
            </Button>
          </CardHeader>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
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

export default Pokemon;
