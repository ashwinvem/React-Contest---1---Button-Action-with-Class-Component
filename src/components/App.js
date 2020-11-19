import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({
      display: !prev.display
    }));
  }

  render() {
    return (
      <div id="main">
        {this.state.display ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          ""
        )}
        <button id="click" onClick={this.handleClick}>
          click
        </button>
      </div>
    );
  }
}

export default App;
