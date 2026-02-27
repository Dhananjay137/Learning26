import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetails = () => {
  let teamName = useParams().teamName
  return (
    <div>Playing {teamName}.....</div>
  )
}
