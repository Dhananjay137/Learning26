import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div>
      <ul style={{textAlign:'center'}}>
        <li><Link to='/Watch/stranger things'>STRANGER THINGS</Link></li>
        <li><Link to='/Watch/money heist'>Money Heist</Link></li>
        <li><Link to='/Watch/takes`s classes'>Takes's classes</Link></li>
      </ul>
    </div>
  )
}
