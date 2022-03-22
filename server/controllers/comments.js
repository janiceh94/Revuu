const db = require('../models');


const create = (req, res) => {
    db.Review.findById(req.params.rid, (err, foundReview) => {
        db.User.findById(req.body.user, (err, commentingUser) => {
            if(err) {
                return res.status(400).json({
                    message: "Unable to create comment",
                    error: err
                })
            }
            const newComment = req.body;
            foundReview.comments.push(newComment);
            commentingUser.comments.push(foundReview);
            foundReview.save();
            commentingUser.save();
            return res.status(201).json({
                message: "Successfully created!",
                data: newComment
            })
        });
    });
}

const update = (req, res) => {
    db.Review.findById(req.params.rid, (err, foundReview) => {
        if(err) {
            return res.status(400).json({
                message: "Unable to update commment",
                error: err
            })
        }
        const updatedComment = req.body;
        const commentIdx = foundReview.comments.findIndex((comment) => comment._id === req.params.cid);

        foundReview.comments.splice(commentIdx, 1, updatedComment);

        foundReview.save();
        return res.status(202).json({
            message: "Successfully updated!",
            data: updatedComment
        })
    })
}

const destroy = (req, res) => {
    db.Review.findById(req.params.rid, (err, foundReview) => {
        if(err) {
            return res.status(400).json({
                message: "Unable to delete comment",
                error: err
            })
        }
        const commentIdx = foundReview.comments.findIndex((comment) => comment._id === req.params.cid);
        const deletedComment = foundReview.comments[commentIdx];

        foundReview.comments.splice(commentIdx, 1);
        foundReview.save();
        return res.status(201).json({
            message: "Successfully deleted!",
            data: deletedComment
        })
    })
}

module.exports = {
    create, 
    update, 
    destroy
}