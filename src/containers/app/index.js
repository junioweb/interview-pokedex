import React from 'react';
import { Route, Link } from 'react-router-dom';
// import Home from '../home/index';
// import About from '../about';

const App = () => (
  <div>
    <div className="container-fluid" id="header">
      <div className="row">
        <div className="col-12">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light" id="menu">
              <div className="collapse navbar-collapse justify-content-center">
                <div className="navbar-nav">
                  <Link to="/" class="nav-link active">
                    Home
                  </Link>
                  <Link to="/about-us" class="nav-link">
                    About
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>

    <div className="container">
      <main>
        {/*<Route exact path="/" component={Home} />*/}
        {/*<Route exact path="/about-us" component={About} />*/}
      </main>
    </div>
  </div>
);

export default App;
