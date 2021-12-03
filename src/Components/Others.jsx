import React from "react";

class Others extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>
          the main goal of this site is to help me practice and learn more about
          web development
        </h1>
        <h2>
          great site to take pictures from is
          <a href="https://www.pexels.com/">Pexels.com</a>
          <img src="./img/contemplating.jpeg" alt="contemplating" width="300" />
        </h2>
      </div>
    );
  }
}

export default Others;
