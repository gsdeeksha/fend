import React, { Component } from 'react'

class classClick extends Component{
    clickme(){
        console.log('i have clicked this button')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickme}>click me</button>
            </div>

        )
    }
}

export default classClick