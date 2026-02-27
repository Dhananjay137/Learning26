import React from 'react'

export const MapDemo3 = () => {
  let students = [
    {id:1,name:'ram',marks:78,city:'surat'},
    {id:2,name:'sita',marks:80,city:'ahmedabad'},
    {id:3,name:'arjun',marks:85,city:'surat'}
  ]
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <td>ID</td>
            <td>name</td>
            <td>marks</td>
            <td>city</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student)=> <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>
            <td>{student.city}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
