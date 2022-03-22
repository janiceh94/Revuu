const db = require('../models');

const index = (req, res) => {
    db.Review.find().exec((err, allReviews) => {
        if(err){
            return res.status(400).json({
                message:'Unable to find reviews', 
                error: err,
            })
        }
        return res.status(200).json({
            message: 'All reviews found',
            data: allReviews,
        })
    })
}

const show = (req, res) => {
    db.Review.findById(req.params.id, (err, foundReview) => {
        if(err){
            return res.status(400).json({
                message: 'Unable to show review', 
                error: err,
            })
        }
        return res.status(200).json({
            message: 'Review found',
            data: foundReview,
        })
    })
}

const create = (req, res) => {
    db.Review.create(req.body, (err, savedReview) => {
        db.User.findById(req.body.user,(err, foundUser) => {
            if(err){
                return res.status(400).json({
                    message: 'Error finding user',
                    error: err,
                })
            }
            foundUser.reviews.push(savedReview);
            foundUser.save();
        });
        if(err){
            return res.status(400).json({
                message: 'Unable to create review',
                error: err,
            })
        }
        return res.status(201).json({
            message: 'Review created',
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
                    message: 'Unable to update',
                    error: err,
                })
            }
            return res.status(202).json({
                message: 'Update Successful',
                data: updatedReview,
            })
        })
}

const destroy = (req, res) => {
    db.Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
        db.User.findById(deletedReview.user, (err, foundUser) => {
            if(err){
                return res.status(400).json({
                    message: 'Error finding User',
                    error: err,
                })
            }
            foundUser.reviews.splice(foundUser.reviews.indexOf(deletedReview),1);
            foundUser.save();
        })
        if(err){
            return res.status(400).json({
                message: 'Error deleting review',
                error: err,
            })
        }
        return res.status(200).json({
            message: 'Review deleted',
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