import React from 'react'
import PERSON from './Person'

function namelist(){
    const persons = [
        {
            id:1,
            name:'clarck'
        },
        {
            id:2,
            name:'mike'
        },
        {
            id:3,
            name:'ana'
        }
    ]
    const list1 = persons.map(person=> <PERSON person={person}/>)
    return( 
        <div>
            {list1}
        </div>
    )
    // return (
    //     <div>
    //         <h5>{names[0]}</h5>
    //         <h5>{names[1]}</h5>
    //         <h5>{names[2]}</h5> 
    //     </div>
    // )
}
export default namelist