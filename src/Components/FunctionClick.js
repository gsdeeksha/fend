import React from 'react'

function FunctionClick(){
    function afterclick(){
        console.log('button click')
    }
    return(
        <div>
            <button onClick={afterclick}>click</button>
        </div>
    ) 

}
export default FunctionClick