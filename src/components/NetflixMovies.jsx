import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  let movies = [
    {id:1,name:'Spider Man Home Coming'},
    {id:2,name:'Venom The Last Dance'},
    {id:2,name:'pireats of carribean the Dead see'}
  ]
  return (
    <div>
      <ul style={{textAlign:'center'}}>
        {movies.map((movie) => <li><Link to={`/Watch/${movie.name}`}>{movie.name}</Link></li>)}
      </ul>
    </div>
  )
}
