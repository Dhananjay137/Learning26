const mongoose = require("mongoose")

const connectDB = () => {

  mongoose.connect("mongodb://127.0.0.1:27017/2026_internship_learning").then(() => {
    console.log("connected to database successfully")
  }).catch((err) => {
    console.log("error while connecting to database", err)
  })

}
module.exports = connectDB