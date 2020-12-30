import React, { Component } from "react";

export default class AllNames extends Component {
  render() {
    return (
      <div>
        {this.props.names.map((name) => {
          if (name.sex === "f") {
            name.isClicked = false;
            return (
              <button
                onClick={()=>this.props.clicked(name.id)}
                key={name.id}
                style={{
                  backgroundColor: "pink",
                  margin: "1px",
                  borderColor: "white",
                }}
              >
                {name.name}
              </button>
              
            );
          } else if (name.sex === "m") {
            name.isClicked = false;
            return (
              <button
                onClick={()=>this.props.clicked(name.id)}
                key={name.id}
                style={{
                  backgroundColor: "#46CBE9",
                  margin: "1px",
                  borderColor: "white",
                }}
              >
                {name.name}
              </button>
            );
          }
        })
        }
      </div>
    );
  }
}
