import React from 'react'

export const MapDemo10 = () => {
  const hrData = [
  { name: 'John Doe', role: 'Manager', dept: 'Sales', loc: 'NYC', mode: 'On-site', active: '09:00 AM' },
  { name: 'Jane Smith', role: 'Engineer', dept: 'Tech', loc: 'Remote', mode: 'Remote', active: '10:30 AM' },
  { name: 'Sam S.', role: 'Intern', dept: 'Marketing', loc: 'Austin', mode: 'On-site', active: 'Yesterday' },
  { name: 'Riley V.', role: 'Lead', dept: 'Design', loc: 'Remote', mode: 'Remote', active: '08:45 AM' },
  { name: 'Alex P.', role: 'Analyst', dept: 'Finance', loc: 'Chicago', mode: 'Hybrid', active: '11:15 AM' },
];
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td>Employee Name</td>
            <td>Role</td>
            <td>Department</td>
            <td>Location</td>
            <td>Work Mode</td>
            <td>Last Active</td>
          </tr>
        </thead>
        <tbody>
          {hrData.map((emp,i) => <tr>
            <td>{emp.name}</td>
            <td style={{background: emp.role === 'Manager' ? '#e0f2fe' : emp.role === 'Intern' ? '#f0fdf4' : '#f3f4f6'}}>{emp.role}</td>{/* Condition 1 & 2: Role Badges */}
            <td>{emp.dept}</td>
            <td>{emp.loc}</td>
            <td style={{ color: emp.mode === 'Remote' ? '#2563eb' : '#ea580c' }}>{emp.mode}</td>{/* Condition 3: Work Mode Color */}
            <td style={{ color: emp.active === 'Yesterday' ? '#9ca3af' : '#059669' }}>{emp.active}</td>{/* Condition 4: Inactive Dimming */}
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
