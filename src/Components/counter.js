import React, { Component } from 'react'

 class counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increment(){
        // this.setState(
        //     {
        //         count:this.state.count+1
        //     },
        //     () => {
        //         console.log('Callback value',this.state.count)
        //     }
        // )
        this.setState(prevState => ({
            count: prevState.count+1
        }))
        console.log(this.state.count)
    }
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={()=>this.incrementfive()}>Increment</button>
            </div>
        )
    }
}
export default counter