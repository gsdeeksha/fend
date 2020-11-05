import React from 'react'


class input extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: ' '
       }
       this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
       this.setState({data: e.target.value});
    }
    render() {
       return (
          <div>
             <input type = "text" value = {this.state.data} 
                onChange = {this.updateState} />
             <button onClick={this.state.data}>Submit</button> 
            {/* <h4>{this.state.data}</h4> */}
          </div>
       );
    }
 }
// class inputy extends Component{
//     constructor (props){
//         super(props)
//         this.state={
//             text:''
//         }
//         this.eventhandler = this.eventhandler.bind(this)
//     }
//     eventhandler(evented){
//         console.log(document.querySelector('.text'));
//         this.setState({
//             text:evented.target.value
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" onKeyUp={()=>this.eventhandler()}></input>
//                 <button onClick={this.state.text}>Submit</button>
//             </div>
//         )
//     }
// }
export default input