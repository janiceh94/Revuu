const jwt = require("jsonwebtoken")

module.exports = async(req, res, next) => {
    try {
        //grab that token!
        const bearerHeader = req.headers.authorization;

        //if there isnt a token
        if(typeof bearerHeader === "undefined"){
            return res.sendStatus(403)
        }
        //if there is a token
        const token = bearerHeader.split(" ")[1]
        const payload = await jwt.verify(token, "hailsatan")
        req.userId = payload._id

        next()
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error :((( sowwy"
        })
    }
}