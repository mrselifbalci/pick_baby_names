import React, { Component } from "react";
import "./App.css";
import names from "./components/Names";
import Favorite from "./components/Favorite";
import AllNames from "./components/AllNames";
import Input from "./components/Input";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allnames: names,
    };
    // this.filterNames=this.filterNames.bind(this)
  }

  filterNames = (e) => {
    this.setState({
      allnames: names.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  onlyGirls = (e) => {
    this.setState({
      allnames: names.filter((item) => item.sex === "f"),
    });
  };

  onlyBoys = (e) => {
    this.setState({
      allnames: names.filter((item) => item.sex === "m"),
    });
  };

  defaultNames=()=>{
    this.setState({
        allnames: names
      });
  }

  favorite=()=>{
    console.log('calisti')
}

  render() {
    return (
      <div style={{ marginTop: 20 }} className="App">
        <h1 style={{ color: "hotpink" }}>Baby Name Picker</h1>
        <br />
        <Input
          names={names}
          filterNames={this.filterNames}
          onlyGirls={this.onlyGirls}
          onlyBoys={this.onlyBoys}
          defaultNames={this.defaultNames}
        />
        <Favorite />
        <AllNames names={this.state.allnames} favorite={this.favorite}/>
      </div>
    );
  }
}
