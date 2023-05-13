import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import { useDispatch, useSelector } from 'react-redux'

const ComponentA = () => {

    const inputValue = useSelector(state => state.inputValue)
    const dispatch=useDispatch()
    const handleInput = (event) => {
        dispatch({ type: "UPDATE_INPUT_VALUE", payload: event.target.value })
}

  return (
      <div>
          <ComponentB onInputChange={handleInput} />
          <ComponentC inputValue={inputValue} />
    </div>
  )
}

export default ComponentA