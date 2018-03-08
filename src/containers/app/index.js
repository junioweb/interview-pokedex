import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Pokemons from '../pokemons';
import Pokedex from '../pokedex';

const App = () => (
  <div>
    <Container fluid id="header">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light" id="menu">
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav">
              <NavLink
                to="/interview-pokedex/"
                exact
                activeClassName="active"
                className="nav-link">
                Pokémons
              </NavLink>
              <NavLink
                to="/interview-pokedex/pokedex"
                activeClassName="active"
                className="nav-link">
                PokéDex
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </Container>

    <main>
      <Switch>
        <Route exact path="/interview-pokedex/" component={Pokemons} />
        <Route path="/interview-pokedex/pokedex" component={Pokedex} />
      </Switch>
    </main>
  </div>
);

export default App;
