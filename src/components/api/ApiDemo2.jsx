import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
  const addUser = async () => {
    const userObj = {
      name:"Dhananjay",
      age:21,
      email:"dhananjayrathod006@gmail.com",
      password:"********",
      isActive:true
    }
    try {
      const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
      console.log('res from server',res)
      console.log(res.data)
    } catch (error) {
      console.log(error) 
      alert('error while adding user')
    }
  }
  return (
    <div>
      <h1>ApiDemo2</h1>
      <button onClick={() => {addUser()}}>Add User</button>
    </div>
  )
}
