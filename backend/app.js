//require express
const express = require("express") // express module
const connectDB = require("./src/utils/DBConnection")
connectDB() // connect to database

// create object of express
const app = express()
app.use(express.json()) // to parse json data in request body

//require routes
const productRoutes = require("./src/routes/ProductRoute")
const bookRoutes = require("./src/routes/BooksRoute")
const stateRoutes = require('./src/routes/StateRoute')
const cityRoutes = require('./src/routes/CityRoute')
const categoryRoutes = require('./src/routes/CategoryRoute')

//use routes in express
app.use("/prod",productRoutes)
app.use("/book",bookRoutes)
app.use('/state',stateRoutes)
app.use('/city',cityRoutes)
app.use('/cat',categoryRoutes)

//servation createion
const PORT = 3000
app.listen(PORT,() => {
  console.log(`server started on port ${PORT}`)
})
