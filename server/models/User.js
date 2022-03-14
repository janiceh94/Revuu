const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName: {type: String,required: true,},
    userName: {type: String, required: true},
    email: {type: String, required: true,unique: true},
    password: {type: String, required: true,select: false},
    posts:{type: Schema.Types.ObjectId, ref:'Posts'},
    follows: {type: Schema.Types.ObjectId, ref:'Follows'}
})

const User = mongoose.model("User", userSchema);

module.exports = User;