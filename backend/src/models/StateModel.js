const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stateSchema = new Schema({
  state:{
    type: String,
    required: true
  },
  districts:{
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('state',stateSchema)