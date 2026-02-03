import React from 'react'

export const MapDemo6 = () => {
  let project_status = [
    {taskId:101,projectTaskName:'market Researcher',assignTo:'Ansh j.',priority:'high',dueDate:'10-feb-2026',completion:100},
    {taskId:102,projectTaskName:'UI/UX Wireframes',assignTo:'Mike k.',priority:'medium',dueDate:'15-feb-2026',completion:45},
    {taskId:103,projectTaskName:'API Integration',assignTo:'Leo T.',priority:'high',dueDate:'30-feb-2026',completion:85},
    {taskId:104,projectTaskName:'Beta Testing',assignTo:'Sarah J.',priority:'low',dueDate:'1-march-2026',completion:10},
    {taskId:102,projectTaskName:'Client Sign-off',assignTo:'Mike k.',priority:'heigh',dueDate:'15-march-2026',completion:0}
  ]
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td>Task ID</td>
            <td>Project Task Name</td>
            <td>Assigned To</td>
            <td>Priority</td>
            <td>Due Date</td>
            <td>Completion(%)</td>
          </tr>
        </thead>
        <tbody>
          {project_status.map((task) => <tr style={{backgroundColor: task.priority == 'high' && 'red'}}>
            <td>{task.taskId}</td>
            <td>{task.projectTaskName}</td>
            <td>{task.assignTo}</td>
            <td>{task.priority}</td>
            <td>{task.dueDate}</td>
            <td style={{color: task.completion > 50 && 'yellow'}}>{task.completion}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
