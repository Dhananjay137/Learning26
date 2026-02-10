import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
  {console.log(props)}
  
  return (
    <div>
      <h2>EmployeeList</h2>
      <h2>{props.tittle}</h2>
      <h2>{props.company.name}</h2>
      <h2>{props.company.year}</h2>
      
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
      <SubEmployeeList array={props.array}></SubEmployeeList>
    </div>
  )
}
