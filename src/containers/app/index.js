import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from '../home/index';

const App = () => (
  <div>
    <Container fluid id="header">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light" id="menu">
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active">
                Pokémons
              </Link>
              <Link to="/pokedex" className="nav-link">
                PokéDex
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </Container>

    <main>
      {<Route exact path="/" component={Home} />}
      {/*<Route exact path="/pokedex" component={About} />*/}
    </main>
  </div>
);

export default App;
