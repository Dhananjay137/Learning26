import React from 'react'

export const SubEmployeeList = (props) => {
  return (
    <div>
      <h1>SubEmployeeList</h1>
      <p>table from sub employee list using PROPS DRILLING:</p>
      <table className='table'>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
          </tr>
        </thead>
        <tbody>
          {props.array.map((emp) => {
            return <tr>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
