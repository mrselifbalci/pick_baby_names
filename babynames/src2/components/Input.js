import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.filterNames}
          type="text"
          placeholder="Enter a name..."
        ></input>
        <button
          onClick={this.props.defaultNames}
          style={{
            backgroundColor: "#f3f3f3",
            margin: "2px",
            borderColor: "white",
          }}
        >
          All
        </button>
        <button
          onClick={this.props.onlyBoys}
          style={{
            backgroundColor: "#46CBE9",
            margin: "2px",
            borderColor: "white",
          }}
        >
          Boys
        </button>
        <button
          onClick={this.props.onlyGirls}
          style={{
            backgroundColor: "pink",
            margin: "2px",
            borderColor: "white",
          }}
        >
          Girls
        </button>
      </div>
    );
  }
}
