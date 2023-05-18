const db = require("../models")

// model
const Review = db.review

// 1 add review
const addReview = async (res, req) => {
    let data = {
        rating: req.body.rating,
        descriotion: req.body.descriotion,
    }
    try {
        const review = await Review.create(data)
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send("found add review")
    }
}

// 2 get all review
const getAllreview = async (res, req) => {
    try {
        const review = await Review.findAll({})
        res.status(200).send(review)
    } catch (error) {
        res.status(500).send("found get review")
    }
}

module.exports = {
    addReview,
    getAllreview,
}