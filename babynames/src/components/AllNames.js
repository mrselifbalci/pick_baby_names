import React, { Component } from "react";

export default class AllNames extends Component {

  
  render() {
    return (
      <div>
        {this.props.names.map((name) => {
          if (name.sex === "f") {
            return (
              <button onClick={this.props.favorite} key={name.id} style={{ backgroundColor: "pink" }}>
                {name.name}
              </button>
            );
          } else if (name.sex === "m") {
            return (
              <button onClick={this.props.favorite} key={name.id} style={{ backgroundColor: "#46CBE9" }}>
                {name.name}
              </button>
            );
          }
        })}
      </div>
    );
  }
}
