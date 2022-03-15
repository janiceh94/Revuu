const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const likesSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    review: { type: Schema.Types.ObjectId, ref: 'Review'},
    likes: {type: Schema.Types.ObjectId, ref:'User'}
})

module.exports = mongoose.model ('Likes', likesSchema)