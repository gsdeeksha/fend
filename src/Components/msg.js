import React, { Component } from 'react'

class msg extends Component{
    constructor(){
        super()
        this.state={
            text:'hi welcome',
            id:1
        }
    }
    changetext(){
        this.setState({
            text:'You have clicked'

        })
    }
    render(){
        return (
            <div>
                <h3>{this.state.text}</h3>
                <h4>{this.state.id}</h4>
                <button onClick = {()=>this.changetext()} >Click here</button>
            </div>
              
        )
    }
}

export default msg