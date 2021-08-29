import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NoteList from "./NoteList";
import Navbar from "./Navbar";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notes" component={NoteList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
