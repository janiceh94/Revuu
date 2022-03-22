const db = require('../models');

const index = (req, res) => {
    db.User.find().exec((err, allUsers) => {
        if(err){
            return res.status(400).json({
                message:'Users not found', 
                error: err,
            })
        }
        return res.status(200).json({
            message: 'All users found',
            data: allUsers,
        })
    })
}
const show = (req, res) => {
    console.log(req.params)
    db.User.findById(req.params.id, (err, foundUser) => {
        if(err){
            return res.status(400).json({
                message: 'User not found', 
                error: err,
            })
        }
        return res.status(200).json({
            message: 'User found',
            data: foundUser,
        })
    })
}
//ANCHOR NO CREATE NECESSARY. CREATE IS HANDLED IN AUTH

const update = (req, res) => {
    db.User.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}, 
        (err, updatedUser) => {
            if(err){
                return res.status(400).json({
                    message: 'Could not update user',
                    error: err,
                })
            }
            return res.status(202).json({
                message: 'User updated',
                data: updatedUser,
            })
        })
}

const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if(err){
            return res.status(400).json({
                message: 'Could not delete user',
                error: err,
            })
        }
        return res.status(200).json({
            message: 'User deleted',
            data: deletedUser
        })
    })
}

module.exports = {
    index,
    show,
    update,
    destroy,
}