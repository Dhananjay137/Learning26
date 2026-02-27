import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {
  let tittle = 'Employee list app'
  let company = {
    name: 'TCS',
    year: 2026
  }
  let array = [
    {id:101,name:'raj',age:23},
    {id:102,name:'jay',age:24},
    {id:103,name:'ajay',age:25},
    {id:104,name:'om',age:23},
  ]
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Employees</h1>
      <EmployeeList tittle={tittle} company={company} array={array}></EmployeeList>
    </div>
  )
}
