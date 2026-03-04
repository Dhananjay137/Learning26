const stateSchema = require('../models/StateModel')

const addState = async (req, res) => {
  const state = await stateSchema.create(req.body)

  if(state){
    res.status(201).json({
      message: 'state added successfully',
      data: state
    })
  } else {
    res.json({
      message: 'error while adding state'
    })
  }
}
const getAllState = async (req, res) => {
  const states = await stateSchema.find()

  if(states){
    res.json({
      message: 'states are fetched successfully',
      data: states
    })
  } else {
    res.json({
      message: 'error while fetching state'
    })
  }
}
const getStateById = async (req, res) => {
  const state = await stateSchema.findById(req.params.id)

  if(state){
    res.json({
      message: 'state is fetched successfully',
      data: state
    })
  } else {
    res.json({
      message: 'error while fetching state'
    })
  }

}
const deleteState = async (req, res) => {
  console.log('before await')
  const state = await stateSchema.findByIdAndDelete(req.params.id)
  console.log('after await')

  if(state){
    console.log('in if')
    res.json({
      message: 'states is deleted successfully',
      data: state
    })
  } else {
    console.log('in else')
    res.json({
      message: 'error while delteing state'
    })
  }
}

module.exports = {
  addState,
  getAllState,
  getStateById,
  deleteState
}