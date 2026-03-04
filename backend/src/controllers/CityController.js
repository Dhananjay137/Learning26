const citySchema = require('../models/CityModel')

const addCity = async (req, res) => {
  const city = await citySchema.create(req.body)

  if(city){
    res.status(201).json({
      message: 'city add successfully!',
      data: city
    })
  } else {
    res.json({
      message: 'error while adding city'
    })
  }
}
const getAllCity = async (req, res) => {
  const cities = await citySchema.find()
  if(cities){
    res.json({
      message: 'cities are fetched successfully!',
      data: cities
    })
  } else{
    res.json({
      message: 'error while fetching cities'
    })
  }
}
const getCityById = async (req, res) => {
  const city = await citySchema.findById(req.params.id)
  if(city){
    res.json({
      message: 'city is fetched successfully',
      data: city
    })
  } else {
    res.json({
      message: 'error while fetching city'
    })
  }
}
const deleteCity = async (req, res) => {
  const city = await citySchema.findByIdAndDelete(req.params.id)
  if(city){
    res.json({
      message: 'city is deleted successfully',
      data: city
    })
  } else {
    res.json({
      message: 'error while deleting city'
    })
  }
}

module.exports = {
  addCity,
  getAllCity,
  getCityById,
  deleteCity
}