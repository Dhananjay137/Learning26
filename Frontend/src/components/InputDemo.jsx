import React, { useState } from 'react'

export const InputDemo = () => {
  const[name, setName] = useState("")
  const[age, setAge] = useState("")
  const handleName = (event) => {
    console.log(event)
    setName(event.target.value)
  }
  const handleAge = (event) => {
    console.log(event)
    setAge(event.target.value)
  }
  return (
    <div>
      <h1>InputDemo</h1>
      <label>Name</label>
      <input type="text" onChange={(event) => handleName(event)}/>
      {name}
      <br />
      <label>Age</label>
      <input type="text" onChange={(event) => handleAge(event)}/>
      {age}
    </div>
  )
}
