import React, { Component } from 'react'

class usergreeting extends Component {
    constructor(props){
        super(props)

        this.state ={
            isloggedin: true
        }
    }
    // render(){
    //     return this.state.isloggedin && <div>Welcome Deeksha</div>
    // }
    render(){
        return this.state.isloggedin?<div>Welcome Deeksha</div>:<div>Welcome User</div>
    }
    // render(){
    //     let msg;
    //     if(this.state.isloggedin){
    //         msg=<div>Welcome Deeksha</div>
    //     }
    //     else{
    //         msg=<div>Welcome User</div>
    //     }
    //     return msg;
    // }
    // // render(){
    //     if(this.state.isloggedin){
    //         return (
    //             <div>Welcome Deeksha</div>
    //         )

    //     }
    //     else{
    //         return (
    //             <div>welcome user</div>
    //         )
    //     }
    // }
}

export default usergreeting