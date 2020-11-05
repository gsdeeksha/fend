import React from 'react'

function Person({person}){
    return (
        <div>
            <h3> I am {person.name} and my ID is {person.id}</h3>
        </div>
    )
}
export default Person