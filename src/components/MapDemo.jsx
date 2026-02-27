import React from 'react'

export const MapDemo = () => {
  let cars = ['bmw','mer','rr','ducati']
  return (
    <div>
      {cars.map((car)=> {
        return <li>{car}</li>
      })}
    </div>
  )
}
