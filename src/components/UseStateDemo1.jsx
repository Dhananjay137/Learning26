import React, { useState } from 'react'
import { CardComponent } from './CardComponent'

export const UseStateDemo1 = () => {
  const[count, setCount] = useState(0)
  //count is a state variable
  //setCount is a setter function --> it will use to update state variable
  //useState(0) act as a inital value

  const increseCount = () => {
    setCount(count+1)
  }
  return (
    <>
    <div>UseStateDemo1</div>
    <h1>count: {count}</h1>
    <button onClick={increseCount}>click</button>
    <CardComponent title='use state demo'></CardComponent>
    </>
  )
}
