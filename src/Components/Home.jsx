import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <h1>
          the main goal of this site is to help me practice and learn more about
          web development
        </h1>
      </div>
    );
  }
}

export default Home;
