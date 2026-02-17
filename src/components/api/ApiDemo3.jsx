import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

  const [comments, setComments] = useState([])

  const geComments = async () => {
    const response = await axios.get('https://dummyjson.com/comments')
    console.log(response)
    console.log(response.data)
    console.log(response.data.comments)
    setComments(response.data.comments)
  }
  return (
    <div>
      <h1>ApiDemo3</h1>
      <button onClick={geComments}>Get Comments</button>
      <table className='table tabl-bordered table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>LIKES</td>
            <td>BODY</td>
            <td>POST ID</td>
            <td>USER ID</td>
            <td>USER NAME</td>
            <td>USER FULL NAME</td>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => { return (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.likes}</td>
              <td>{comment.body}</td>
              <td>{comment.postId}</td>
              <td>{comment.user.id}</td>
              <td>{comment.user.username}</td>
              <td>{comment.user.fullName}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
}
