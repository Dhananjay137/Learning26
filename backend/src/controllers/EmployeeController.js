//dummy data
const employees = [
  {id:1001, name:"vasant", salary:7000},
  {id:1002, name:"chirag", salary:8000},
  {id:1003, name:"om", salary:9000}
]

const getAllEmployees = (req, res) => {
  res.json({
    message: "employees fetched sucessfully",
    data: employees
  })
}
const getEmployeesBySalary = (req, res) => {
  let salary = req.params.salary
  let found = employees.filter((employee) => employee.salary > salary)

  if(found.length == 0){
    res.json({
      message: `employees not found having salary greater than €${salary}`
    })
  } else {
    res.json({
      message: `employess found having salary greater than €${salary}`,
      data: found
    })
  }
}

module.exports = {
  getAllEmployees, getEmployeesBySalary
}