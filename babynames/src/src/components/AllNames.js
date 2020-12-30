import React, { Component } from 'react'

export default class AllNames extends Component {
 constructor(props){
     super(props)

     this.state={
         allnames:[<div>
            {this.props.names.map(name=>{
             if(name.sex==="f"){
             return <button key={name.id} style={{backgroundColor:'pink'}}>{name.name}</button>
              }else if (name.sex==="m"){
              return <button key={name.id} style={{backgroundColor:'#46CBE9'}}>{name.name}</button>
              }
            })}
            </div>]
     }
    }


    render(){

        return (
            <div> 
                {this.state.allnames}
            </div>
            
        )
    }

}