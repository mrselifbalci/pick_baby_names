
import React, { Component } from 'react'

 

export default class Input extends Component {


    render() {
        
        return (
            <div>
             <input  type="text" placeholder="Enter a name..."></input>
                <button style={{backgroundColor:'#f3f3f3'}}>All</button>
                <button style={{backgroundColor:'#46CBE9'}} >Boys</button>
                <button style={{backgroundColor:'pink'}}>Girls</button>
            </div>
        )
    }
}
