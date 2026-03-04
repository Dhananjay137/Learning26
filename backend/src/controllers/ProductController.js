const productSchema = require("../models/ProductModel")

const getAllProducts = async (req, res) => {
    try {
        const products = await productSchema.find()
        res.json({
            message: "products fetched successfully",
            data: products
        })
    } catch (err) {
        res.json({
            message: "error while fetching products",
            error: err
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productSchema.findById(req.params.id)
        res.json({
            message: "product fetched successfully",
            data: product
        })

    } catch (err) {
        res.json({
            message: "error while fetching product",
            error: err
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await productSchema.create(req.body)
        if (product) {
            res.status(201).json({
                message: "product created successfully",
                data: product
            })
        } else {
            res.json({
                message: "error while creating product"
            })
        }

    } catch (err) {
        res.json({
            message: "error while creating product",
            error: err
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productSchema.findByIdAndDelete(req.params.id)
        if (product) {
            res.json({
                message: "product deleted successfully",
                data: product
            })
        } else {
            res.json({
                message: "error while deleting product"
            })
        }
    } catch (err) {
        res.json({
            message: "error while deleting product",
            error: err
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
}