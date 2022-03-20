const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    body: {type: String, required: true}, 
    user: {type: Schema.Types.ObjectId, ref: "User", required: true}, 
    //REVIEW CREATE ROUTES AND CONTROLLERS FOR LIKES???
    likes: [{type: Schema.Types.ObjectId, ref: "User"}],
})

const reviewSchema = new Schema(
    {
        image: {type: String, required: false},
        reviewItem: {type: String, required: true},
        title: {type: String, required: true},
        category: {type: String, required: true}, 
        body: {type:String, required: true},
        rating: {type: Number, required: true},
        upVote: [{type: Schema.Types.ObjectId,ref: "User"}], 
        user: {type: Schema.Types.ObjectId,ref: "User", required: true},
        date: {type: Date},
        comments: [commentSchema],
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Review", reviewSchema)