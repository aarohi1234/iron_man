import React from 'react'


const ComponentB = ({ onInputChange }) => {


  return (
      <div>
          <input type="text" onChange={onInputChange}/>
    </div>
  )
}

export default ComponentB