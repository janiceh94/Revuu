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
    //NOTE THE COMMENTS KEY REFERS TO REVIEWS YOU HAVE COMMENTED ON, NOT THE COMMENTS THEMSELVES. (CAN'T DO THE COMMENTS UNLESS WE MAKE A NEW REFERENCED SCHEMA)
    comments:[{type: Schema.Types.ObjectId,ref: "Review"}],
})

const User = mongoose.model("User", userSchema);

module.exports = User;
