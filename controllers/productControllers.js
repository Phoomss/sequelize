const db = require('../models')

// create main models
const Product = db.product
const Review = db.review

// main work
// 1 create product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        descriotion: req.body.descriotion,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

// 2 get all product
const getAllproduct = async (req, res) => {
    let product = await Product.findAll({})
    res.status(200).send(product)
}

// 3 get single product
const getOneproduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })
    res.status(200).send(product)
}

// 4 update product
const updateProduct = async (req, res) => {
    let id = req.params.id
    const product = await Product.updata(req.body, { where: { id: id } })
    res.status(200).send(product)
}

// 5 delete product
const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destory({ where: { id: id } })
    res.status(200).send("Product is deleted successfuly")
}

// 6 published product
const getPublishedProduct = async (req, res) => {
    const product = await Product.findAll({ where: { published: true } })
    res.status(200).send(product)
}

module.exports = {
    addProduct,
    getAllproduct,
    getOneproduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
}