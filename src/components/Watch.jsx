import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {
  let movieName = useParams().name //.name -> Watch/name
  return (
    <div>Watching.....{movieName}</div>
  )
}
