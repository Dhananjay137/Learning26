import React from 'react'

export const MapDemo5 = () => {
  let students = [
    {id:1,name:'ram',marks:78,city:'surat',gender:'male'},
    {id:2,name:'sita',marks:82,city:'ahmedabad',gender:'female'},
    {id:3,name:'arjun',marks:85,city:'surat',gender:'male'}
  ]
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>MARKS</td>
          <td>CITY</td>
          <td>GENDER</td>
        </tr>
        </thead>
        <tbody>
          {students.map((student) => <tr style={{backgroundColor:student.gender == 'female'&& 'pink'}}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td style={{backgroundColor:student.marks>80 && 'yellow'}}>{student.marks}</td>
            <td>{student.city}</td>
            <td>{student.gender}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
