const db = require("../models");

// create main models
const Product = db.product;
const Review = db.review;

// main work
// 1 Post Create Product
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Failed to create product");
  }
};

// 2 Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Failed to get products");
  }
};

// 3 Get Single Product
const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Failed to get product");
  }
};

// 4 Update Product
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.update(req.body, {
      where: { id: id },
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send("Failed to update product");
  }
};

// 5 Delete Product
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send("Product is deleted successfully");
  } catch (error) {
    res.status(500).send("Failed to delete product");
  }
};

// 6 Get published product
const getPublishedProduct = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { published: true } });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// 7 Get products with reviews (one-to-many relationship)
const getProductReview = async (req, res) => {
  try {
    const data = await Product.findAll({
      include: [
        {
          model: Review,
          as: "review",
          required: false, // เพื่อให้สินค้าที่ไม่มีรีวิวยังถูกดึงมาด้วย
        },
      ],
    });

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
  getProductReview,
};
