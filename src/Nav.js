import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const navStyle = {
      color: "black",
    };
    return (
        <div>
        <nav>
        <h3>TechSystems</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/home">
            <li><a href="/home">Home</a></li>
          </Link>
          <Link style={navStyle} to="/about">
            <li><a href="/about">About</a></li>
          </Link>
          <Link style={navStyle} to="/Nav">
            <li><a href="/.">Nav</a></li>
          {/* <Link style={navStyle} to="/.">
          <li><a href="/.">Nav</a></li>*/}
 
    {/* <li><a href="/.">Nav</a></li> */}
          </Link>
        </ul>
      </nav>
      <h3> Nav component</h3>
      <p>
        simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book. It has survived not only five centuries
      </p>
      </div>
    );
  }
}

export default Nav;
