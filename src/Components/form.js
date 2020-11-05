import React, { Component } from 'react'

class form extends Component{
    constructor(props){
        super(props)
        this.state ={
            first:"",
            second:""
        }

    }
    handleChange(event) {
        this.setState(
            {
                first: event.target.value
            }
        )
      }
      updateChange(event) {
        this.setState(
            {
                second: event.target.value
            }
        )
      }
      render() {
        return( 
            <div>
                <input type='text' name='first' value={this.state.first} onChange={this.handleChange.bind(this)}/><br></br>
                <input type='text' name='second' value={this.state.second} onChange={this.updateChange.bind(this)}/><br></br>
                <button onClick={()=>{console.log('Name :' ,this.state.first , this.state.second)}}>Submit</button>
            </div>   
        )
      }
    
}


export default form