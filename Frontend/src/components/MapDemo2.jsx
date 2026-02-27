import React from 'react'

export const MapDemo2 = () => {
  let users = [
    {id:1,name:'om',age:23,gender:'male'},
    {id:2,name:'ram',age:25,gender:'male'},
    {id:3,name:'sita',age:24,gender:'female'}
  ]
  return (
    <div>
      {users.map((user)=> {
        return <li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
      })}
    </div>
  )
}
