import React, { Component } from "react";

export default class AllNames extends Component {

    clicked=()=>{
       
        if(this.props.names.isClicked === 'false'){
            return this.props.names.isClicked = 'true'
         }else if(this.props.names.isClicked === 'true'){
           return  this.props.names.isClicked = 'false'
         }
    }
   
  render() {
    return (
      <div>
        {this.props.names.map((name) => {
          if (name.sex === "f") {
            name.isClicked = 'false'
            return (
              <button onClick={this.clicked} key={name.id} style={{ backgroundColor: "pink" }}>
                {name.name}
              </button>
              
            );
          } else if (name.sex === "m") {
            name.isClicked = 'false'
            return (
              <button onClick={this.clicked} key={name.id} style={{ backgroundColor: "#46CBE9" }}>
                {name.name}
              </button>
            );
          }
        })}
      </div>
    );
  }
}
