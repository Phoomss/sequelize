const productControllers = require('../controllers/productControllers.js')
const router = require('express').Router()

router.post('/addProduct', productControllers.addProduct)
router.get('/getAllproduct', productControllers.getAllproduct)
router.get('/getPublishedProduct', productControllers.getPublishedProduct)

router.get('/:id', productControllers.getOneproduct)
router.put('/:id', productControllers.updateProduct)
router.delete('/:id', productControllers.deleteProduct)

module.exports = router