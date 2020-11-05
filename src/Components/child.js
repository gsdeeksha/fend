import React from 'react'

function child(props){
    return(
        <div>
            <button onClick={()=>props.greethandler('child')}>Greet Parent</button>
        </div>
    )
}

export default child