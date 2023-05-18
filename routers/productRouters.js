const productControllers = require('../controllers/productControllers.js')
const reviewControllers = require('../controllers/reviewControllers.js')

// router
const router = require('express').Router()

// use controllers
router.post('/addProduct', productControllers.addProduct)
router.get('/getAllproduct', productControllers.getAllproduct)
router.get('/getPublishedProduct', productControllers.getPublishedProduct)

// review controller
router.post("/addReview",reviewControllers.addReview)
router.get("/getAllReview",reviewControllers.getAllReview)


// get review product
router.get("/getProductReview",productControllers.getProductReview)

// product controller
router.get('/:id', productControllers.getOneproduct)
router.put('/:id', productControllers.updateProduct)
router.delete('/:id', productControllers.deleteProduct)

module.exports = router