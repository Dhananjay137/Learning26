const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  city:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  destinations: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('category',categorySchema)