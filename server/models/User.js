const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName: {type: String},
    userIcon: {type: String},
    // userName: {type: String, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    bio: {type: String},
    reviews:[{type: Schema.Types.ObjectId, ref:'Review'}],
    follows: [{type: Schema.Types.ObjectId,ref: "User"}],
    comments:[{type: Schema.Types.ObjectId,ref: "Review"}],
})

const User = mongoose.model("User", userSchema);

module.exports = User;
