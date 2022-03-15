const db = require('../models');

// const showAll = (req, res) => {

// }

// const showOne = () => {
    
// }

const create = (req, res) => {
    db.Review.findById(req.params.rid, (err, foundReview) => {
        if(err) {
            return res.status(400).json({
                message: "Nope",
                error: err
            })
        }
        const newComment = req.body;
        foundReview.comments.push(newComment);
        foundReview.save();
        return res.status(201).json({
            message: "Successfully created!",
            data: newComment
        })
    })
}

const update = (req, res) => {
    db.Review.findById(req.params.rid, (err, foundReview) => {
        if(err) {
            return res.status(400).json({
                message: "Nope",
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
                message: "Nope",
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
    // showAll,
    // showOne,  
    create, 
    update, 
    destroy
}