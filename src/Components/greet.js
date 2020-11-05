import React from 'react'

const greet = props => {
  const {name}=props
  return (
    <div>
      <h1>hello { name }</h1>
    </div>
  )
}
export default greet