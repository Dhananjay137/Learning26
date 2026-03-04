const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
  city:{
    type: String,
    required: true
  },
  destinations:{
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('city',citySchema)