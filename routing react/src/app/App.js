import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Posts from "./Posts";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <nav>
            <Link className="nav__link" to="/">
              Home
            </Link>
            <Link className="nav__link" to="/about">
              About
            </Link>
            <Link className="nav__link" to="/users">
              Users
            </Link>
            <Link className="nav__link" to="/posts">
              Posts
            </Link>
          </nav>
        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/posts" component={Posts} />
      </Fragment>
    );
  }
}

export default App;
