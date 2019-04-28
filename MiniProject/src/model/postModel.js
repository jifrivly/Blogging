const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogDB")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error("Database connection error");
    });

const newPostSchema = new mongoose.Schema({
    username :String,
    image: String,
    heading: String,
    text: String,
    date: String,
    category: String,
    comments: String,
});

module.exports = mongoose.model("post", newPostSchema)