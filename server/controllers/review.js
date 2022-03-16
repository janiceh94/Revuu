const db = require('../models');

const index = (req, res) => {
    db.Review.find().exec((err, allReviews) => {
        if(err){
            return res.status(400).json({
                message:'Sorry', 
                error: err,
            })
        }
        return res.status(200).json({
            message: 'Yay yay',
            data: allReviews,
        })
    })
}

const show = (req, res) => {
    db.Review.findById(req.params.id, (err, foundReview) => {
        if(err){
            return res.status(400).json({
                message: 'Sorry', 
                error: err,
            })
        }
        return res.status(200).json({
            message: 'Yay',
            data: foundReview,
        })
    })
}

const create = (req, res) => {
    db.Review.create(req.body, (err, savedReview) => {
        db.User.findById(req.body.user,(err, foundUser) => {
            console.log("found User",foundUser)
        });
        console.log(req.body);
        if(err){
            return res.status(400).json({
                message: 'Sorry',
                error: err,
            })
        }
        return res.status(201).json({
            message: 'Yay',
            data: savedReview
        })
    })
}

const update = (req, res) => {
    db.Review.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}, 
        (err, updatedReview) => {
            if(err){
                return res.status(400).json({
                    message: 'Sorry',
                    error: err,
                })
            }
            return res.status(202).json({
                message: 'Yay',
                data: updatedReview,
            })
        })
}

const destroy = (req, res) => {
    db.Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
        if(err){
            return res.status(400).json({
                message: 'Sorry',
                error: err,
            })
        }
        return res.status(200).json({
            message: 'Yay',
            data: deletedReview
        })
    })
}

module.exports = {
    index, 
    show,
    create,
    update, 
    destroy
}