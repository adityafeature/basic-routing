import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
        <Route path="/." exact component={Nav}/>
        <Route path="/Home" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

