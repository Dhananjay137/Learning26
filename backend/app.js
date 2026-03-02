//require express
const express = require("express") // express module
const connectDB = require("./src/utils/DBConnection")
connectDB() // connect to database

// create object of express
const app = express()

//require routes
const productRoutes = require("./src/routes/ProductRoute")

//use routes in express
app.use("/prod",productRoutes)

//servation createion
const PORT = 3000
app.listen(PORT,() => {
  console.log(`server started on port ${PORT}`)
})
