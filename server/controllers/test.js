const db = require("../models")

const index = (req, res) => {
    return(res.json({
        test:"hello",
    }));
}

const review = (req, res) => {
    db.Review.find().exec((err, allReviews) => {
        if (err) {
            return res.status(400).json({
                message: "no",
                error: err,
            })
        }
        return res.status(200).json({
            message: "Success!",
            data: allReviews, 
        })
    })
}

module.exports = {
    index,
    review,
}
