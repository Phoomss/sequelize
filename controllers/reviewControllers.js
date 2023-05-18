const db = require("../models")

// model
const Review = db.review

// 1 add review
const addReview = async (req, res) => {
    let data = {
        rating: req.body.rating,
        descriotion: req.body.descriotion,
    }
    try {
        const review = await Review.create(data)
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send("Failed to add review");
    }
}

// 2 get all review
const getAllreview = async(req, res) => {
    try {
        const review = await Review.findAll({})
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send("Failed to get review");
    }
}

module.exports = {
    addReview,
    getAllreview,
}