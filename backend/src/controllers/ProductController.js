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

module.exports = {
    getAllProducts
}