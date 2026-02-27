//require express
const express = require("express") // express module

// create object of express
const app = express()

//require routes
const userRoutes = require("./src/routes/UserRoute")
const employeeRoutes = require("./src/routes/EmployeeRoute")

//use routes in express
app.use(userRoutes)
app.use(employeeRoutes)

//servation createion
const PORT = 3000
app.listen(PORT,() => {
  console.log(`server started on port ${PORT}`)
})
