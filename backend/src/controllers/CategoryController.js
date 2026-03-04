const categorySchema = require('../models/CategoryModel')

const addCategory = async (req, res) => {
  const category = await categorySchema.create(req.body)
  if(category){
    res.status(201).json({
      message: 'category add successfully!',
      data: category
    })
  } else {
    res.json({
      message: 'error while adding category'
    })
  }
}
const getAllCategory = async (req, res) => {
  const categories = await categorySchema.find()
  if(categories){
    res.json({
      message: 'categories fetched successfully!',
      data: categories
    })
  } else {
    res.json({
      message: 'error while fetching categories'
    })
  }
}
const getCategoryById = async (req, res) => {
  console.log(req.params.id)
  const category = await categorySchema.findById(req.params.id)
  console.log(category)
  if(category){
    res.json({
      message: 'category fetched successfully',
      data: category
    })
  } else {
    res.json({
      message: 'error while fetching category'
    })
  }
}
const deleteCategory = async (req, res) => {
  const category = await categorySchema.findByIdAndDelete(req.params.id)
  if(category){
    res.json({
      message: 'category deleted successfully',
      data: category
    })
  } else {
    res.json({
      message: 'error while deleting category'
    })
  }
}

module.exports = {
  addCategory,
  getAllCategory,
  getCategoryById,
  deleteCategory
}