import React from 'react'

export const MapDemo4 = () => {
  let cities = [
    {id:1,name:'ahmedabad',pop:80000,aqi:300},
    {id:2,name:'delhi',pop:1000000,aqi:500},
    {id:3,name:'deharadun',pop:10000,aqi:150}
  ]
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>name</td>
            <td>pop</td>
            <td>aqi</td>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => <tr>
            <td>{city.id}</td>
            <td>{city.name}</td>
            <td>{city.pop}</td>
            <td>{city.aqi}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
