import React from 'react'
import { CardComponent } from './CardComponent'

export const FunctionDemo1 = () => {
  const test = () => {
    alert("test function is called...")
  }
  const test2 = (x) => {
    alert("value of x: "+x)
  }
  return (
    <>
    <div>FunctionDemo1</div>
    <button onClick={test}>CLICK</button>
    <button onClick={() => {test2(200)}}>CLICK 2</button>
    <CardComponent title='function demo 1' description='function demo 1'></CardComponent>
    </>
  )
}
