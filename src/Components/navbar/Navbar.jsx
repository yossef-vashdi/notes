import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/others">
            <li>Others</li>
          </Link>
          <Link to="/notes">
            <li>Notes</li>
          </Link>
          <Link to="/simple-site">
            <li>Simple site</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
