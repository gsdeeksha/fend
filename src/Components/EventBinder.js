import React, { Component } from 'react'

class EventBinder extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'hello'
        }
        this.clickme = this.clickme.bind(this)
    }
    // clickme(){
    //     this.setState({
    //         message:"Good bye"
    //     })
    // }
    clickme=() => {
        this.setState({
            message:"Good bye"
        })
    }
    render(){
        return(
            <div>
                <h4>{this.state.message}</h4>
                {/* <button onClick={this.clickme.bind(this)}>eventbind</button> */}
                <button onClick={this.clickme}>eventbind</button><br></br>
            </div>
        )
    }
}

export default EventBinder