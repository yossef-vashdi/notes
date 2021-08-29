import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/notes">
            <li>Notes</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
