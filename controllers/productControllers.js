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
    let id = req.params.id;
    try {
        const updatedProduct = await Product.update(req.body, { where: { id: id } });
        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(500).send("Failed to update product");
    }
};


// 5 delete product
const deleteProduct = async (req, res) => {
    let id = req.params.id;
    try {
        await Product.destroy({ where: { id: id } });
        res.status(200).send("Product is deleted successfully");
    } catch (error) {
        res.status(500).send("Failed to delete product");
    }
};

// 6 published product
const getPublishedProduct = async (req, res) => {
    const product = await Product.findAll({ where: { published: true } })
    res.status(200).send(product)
}

// 7 connect one to meny relation product and review
const getProductReview = async (req,res) =>{
    const data = await Product.findAll({
        include:[{
            model:Review,
            as: 'review'
        }],
        where:{id:2}
    })
}

module.exports = {
    addProduct,
    getAllproduct,
    getOneproduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReview
}