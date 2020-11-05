import React, { Component } from 'react'
import Child from './child'

class parent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName:'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childpara){
        alert(`Hello ${this.state.parentName} from ${childpara}`)
    }

    render(){
        return (
            <div>
                <Child greethandler={this.greetParent}/>
            </div>
        )
    }
}
export default parent