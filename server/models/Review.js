const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    body: {type: String, required: true}, 
    user: {type: String, required: true}, //{type: Schema.Types.ObjectId, ref: “User”} 
    likes: {type: Number}
})

const reviewSchema = new Schema(
    {
        reviewItem: {type: String}, //, required: true},
        title: {type: String, required: true},
        category: {type: String}, //, required: true},
        body: {type:String}, //, required: true},
        rating: {type: Number}, //, required: true},
        upVote: {type: Number}, 
        user: {type: String}, //referenced data to be added later {type: Schema.Types.ObjectId, ref: “User”} 
        date: {type: Date},
        comments: [commentSchema]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Review", reviewSchema)