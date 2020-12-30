import React, { Component } from 'react'
import names from "./Names";

export default class Name extends Component {
    constructor(){
        super()
        this.state={
           favorite: <p style={{ color: "grey" }}>
          Favorites:Click some names below to add to your shortlist...
        </p>,
            names:[]
        }
    }
 
     favoriteNames=()=>{
         this.setState({
             names:[this.props.favorite()]
         })
     }

    render() {
        return (
            <div>
                {this.state.favorite}
                <hr style={{ width: "95%" }}/>
                {this.state.names.map(item=><button>{item.name}</button>)}
            </div>
            
        )
    }
}
