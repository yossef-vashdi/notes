import React, { Component } from "react";
import "./simpleSite.css";

class SimpleSite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className={"simple-site nav-bar"}>
          Im navbar
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        </nav>
        <title>Im a title</title>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          maiores ad ea, excepturi animi quia debitis numquam aspernatur
          veritatis molestias necessitatibus quos atque. Obcaecati modi dolore
          quidem iusto facere sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero maiores ad ea, excepturi animi quia debitis
          numquam aspernatur veritatis molestias necessitatibus quos atque.
          Obcaecati modi dolore quidem iusto facere sit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Libero maiores ad ea, excepturi
          animi quia debitis numquam aspernatur veritatis molestias
          necessitatibus quos atque. Obcaecati modi dolore quidem iusto facere
          sit.
        </main>
        <footer className={"simple-site nav-bar"}>
          Im a footer
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default SimpleSite;
