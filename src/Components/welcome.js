import React, { Component } from 'react'

class welcome extends Component{
    render(){
        var a=10
        return (
            <div>
                <p>value of a is {a}</p>
                <h1>Class Component<br></br> {this.props.name}</h1>
            </div>
            
        )
    }
}

export default welcome