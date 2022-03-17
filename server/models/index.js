const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log(`MANGODB connected at ${db.host}: ${db.port}! Delightful!`)
    })
    .catch((err) => console.log(`mango dramatically fainted at Error: ${err}`))

module.exports = {
    Review: require("./Review"),
    User: require('./User')
}