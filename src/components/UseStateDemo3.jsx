import React, { useState } from 'react'

export const UseStateDemo3 = () => {
  const[users, setUsers]=useState(['raj','pankaj'])

  const addUser = () => {
    setUsers([...users,'abc'])
  }
  return (
    <>
    <div>UseStateDemo3</div>
    {users.map((u) => <li>{u}</li>)}
    <button onClick={addUser}>add</button>
    </>
  )
}
