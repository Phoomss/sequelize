const productControllers = require('../controllers/productControllers.js')
const reviewControllers = require('../controllers/reviewControllers.js')

// router
const router = require('express').Router()

// use controllers
router.post('/addProduct', productControllers.addProduct)
router.get('/getAllproduct', productControllers.getAllproduct)
router.get('/getPublishedProduct', productControllers.getPublishedProduct)

// review controller
router.get("/getAllreview",reviewControllers.addReview)
router.post("/addReview",reviewControllers.addReview)

// product controller
router.get('/:id', productControllers.getOneproduct)
router.put('/:id', productControllers.updateProduct)
router.delete('/:id', productControllers.deleteProduct)

module.exports = router