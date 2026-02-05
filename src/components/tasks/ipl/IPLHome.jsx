import React from 'react'
import { Link } from 'react-router-dom'

export const IPLHome = () => {
  let iplTeams = [
    {id:1,name:'CSK'},
    {id:2,name:'DC'},
    {id:3,name:'GT'},
    {id:4,name:'KKR'},
    {id:5,name:'LSG'},
    {id:6,name:'MI'},
    {id:7,name:'PK'},
    {id:8,name:'RR'},
    {id:9,name:'RCB'},
    {id:10,name:'SRH'},
  ]
  return (
    <div>
      <h1>IPL</h1>
      {iplTeams.map((team) => <li><Link to={`/TeamDetails/${team.name}`}>{team.name}</Link></li>)}
    </div>
  )
}
