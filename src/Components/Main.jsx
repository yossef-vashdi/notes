import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NoteList from "./NoteList";
import Navbar from "./navbar/Navbar";
import Others from "./Others";
import SimpleSite from "../extra/simpleSite/simpleSite";

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
              <Route path="/others" component={Others} />
              <Route path="/simple-site" component={SimpleSite} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
