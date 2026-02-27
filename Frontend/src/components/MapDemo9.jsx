import React from 'react'

export const MapDemo9 = () => {
  const studentData = [
  { id: '001', name: 'Alice Wang', major: 'CS', gpa: 3.9, attendance: 98, semester: 'Fall 2025' },
  { id: '002', name: 'Bob Miller', major: 'Art', gpa: 2.1, attendance: 75, semester: 'Fall 2025' },
  { id: '003', name: 'Charlie Day', major: 'Physics', gpa: 1.8, attendance: 85, semester: 'Spring 2026' },
  { id: '004', name: 'Diana Prince', major: 'Law', gpa: 4.0, attendance: 100, semester: 'Fall 2025' },
  { id: '005', name: 'Ethan Hunt', major: 'PE', gpa: 3.2, attendance: 60, semester: 'Spring 2026' },
];
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Major</td>
            <td>GPA</td>
            <td>Attendance</td>
            <td>Semester</td>
          </tr>
        </thead>
        <tbody>
          {studentData.map((stud,i) => <tr key={i}>
            <td>{stud.id}</td>
            <td>{stud.name}</td>
            <td>{stud.major}</td>
            <td style={{ 
                background: stud.gpa >= 3.8 && '#d4edda' || stud.gpa < 2.0 &&'#f8d7da',
                color: stud.gpa < 2.0 && '#721c24'
              }}>{stud.gpa}</td>
            <td style={{textDecoration: parseInt(stud.attendance) < 80 && 'underline wave red'}}>{stud.attendance}%</td>{/* Condition 3: Attendance Alert */}
            <td style={{fontStyle: stud.semester.includes('2026') && 'italic'}}>{stud.semester}</td>{/* Condition 4: Future Term Italic */}
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
