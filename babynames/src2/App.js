import React, { Component } from "react";
import "./App.css";
import names from "./components/Names";
import AllNames from "./components/AllNames";
import Input from "./components/Input";
import Name from "./components/Name";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allnames: names,
      favoriteNames:[]
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

  clicked=(id)=>{
      
    this.setState(this.state.allnames.map(item=>{
    if(item.id === id){
      item.isClicked=!item.isClicked
      
    } 
    return this.favorite(item)
    })) 
    
    } 

   favorite=(fav)=>{
     return <button>fav</button>
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
        
        <Name names={this.state.allnames} favorite={this.favorite}/>
        <AllNames names={this.state.allnames}   clicked={this.clicked}/>
      </div>
    );
  }
}
