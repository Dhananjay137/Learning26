import React from 'react'

export const PropertyTable = (props) => {
  console.log(props)
  return (
    <div>
      <h1>PropertyTable</h1>
      <table className='table'>
        <thead>
          <tr>
            <td>ID</td>
            <td>PROPERTY NAME</td>
            <td>TYPE</td>
            <td>CITY</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {props.propertyList.map((property) => {
            return <tr>
              <td>{property.id}</td>
              <td>{property.property_name}</td>
              <td>{property.type}</td>
              <td>{property.city}</td>
              <td>{property.status}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
