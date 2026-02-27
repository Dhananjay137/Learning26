import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

  const [message, setMessage] = useState('')
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await axios.get('https://node5.onrender.com/user/user/')
    console.log(response) // axios response object
    console.log(response.data) // api response
    console.log(response.data.message) // message is the string "Data fetched successfully"
    setMessage(response.data.message)
    console.log(response.data.data) // data is the array of users
    setUsers(response.data.data)
  }
  return (
    <div>
      <h1>API Demo 1</h1>
      <button onClick={getUsers}>Get Users</button>
      <h2>message: {message}</h2>
      {users.map((user) => {return (<li key={user._id}>{user.name}</li>)})}

      <h1>User Table</h1>
      <table className='table'>
        <thead>
          <tr>
            <td>NAME</td>
            <td>AGE</td>
            <td>EMAIL</td>
            <td>ISACTIVE</td>
            <td>PASSWORD</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => { return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.isActive === true ? 'Yes' : 'No'}</td>
              <td>{user.password}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
}
