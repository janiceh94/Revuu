const bcrypt = require ('bycrpts');
const jwt = require('jsonwebtoken');
const db = require('../models');

const register = async (req, res) => {
    try{
        const foundUser = await db.User.findOne({email: req.body.email})
        if(!foundUser){
            //User register sucessfull
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)
            const updatedUser = await db.User.findByIdAndUpdate(
                {_id: foundUser._id},
                {
                    $set: {email: req.body.email},
                    $set: {password: hash}
                },
                {new: true}
            )
            // console.log(updatedUser, "updated user with the salt hash passowrds")
            return res
                .status(201)
                .json({status: 201, message: 'Registered', updatedUser})
        }
        return res 
            .status(400)
            .json({status: 400, message: 'Email is already taken. Please log in '})
    } catch(err){
        return res.status(500).json({
            status: 500,
            error: err,
            message: 'Nope'
        })
    }
}

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne(
            {email: req.body.email}
        ).select('+password')
        // console.log(foundUser, 'Found user with the password')
        if(!foundUser){
            return res
                .status(400).json({
                    status: 400,
                    message: 'Email or password is incorrect. Try Again'
                })
        }
        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        if(isMatch){
            const token = jwt.sign(
                {_id: foundUser._id},
                'Banana',
                {expiresIn: '2h'}
            )
            console.log('token', token)
            return res.status(200).json({
                status: 200,
                message: 'Logged In',
                token
            })
        } else {
            return res
            .status(400).json({
                status: 400,
                message: 'Email or password is incorrect. Try Again'
            })
        }
    }
    catch(err){
        return res.status(500).json({
            status: 500,
            error: err,
            message: 'Banana'
        })
    }
}

module.exports = {
    register,
    login
}