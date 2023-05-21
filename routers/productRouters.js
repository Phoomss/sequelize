const productControllers = require("../controllers/productControllers.js");
const reviewControllers = require("../controllers/reviewControllers.js");

// router
const router = require("express").Router();

// Product routes
router.post("/addProduct", productControllers.addProduct);
router.get("/getAllProducts", productControllers.getAllProducts);
router.get("/getPublishedProduct", productControllers.getPublishedProduct);
router.get("/:id", productControllers.getOneProduct);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

// Review routes
router.post("/addReview", reviewControllers.addReview);
router.get("/getAllReview", reviewControllers.getAllReview);

// Get product reviews
router.get("/getProductReview", productControllers.getProductReview);

module.exports = router;
